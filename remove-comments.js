const fs = require('fs');
const path = require('path');

function removeCommentsFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  if (filePath.endsWith('.css')) {
    // Remove CSS comments /* ... */
    const cleaned = content.replace(/\/\*[\s\S]*?\*\//g, '');
    fs.writeFileSync(filePath, cleaned);
    console.log(`Cleaned CSS comments from: ${filePath}`);
  } else if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    // Remove single-line comments // ...
    const lines = content.split('\n');
    const cleanedLines = lines.map(line => {
      // Don't remove comments that are inside strings
      if (line.includes('//') && !line.match(/['"`].*\/\/.*['"`]/)) {
        const commentIndex = line.indexOf('//');
        // Check if it's not inside a string
        const beforeComment = line.substring(0, commentIndex);
        const singleQuotes = (beforeComment.match(/'/g) || []).length;
        const doubleQuotes = (beforeComment.match(/"/g) || []).length;
        const backticks = (beforeComment.match(/`/g) || []).length;
        
        // If quotes are balanced, it's safe to remove the comment
        if (singleQuotes % 2 === 0 && doubleQuotes % 2 === 0 && backticks % 2 === 0) {
          return line.substring(0, commentIndex).trimEnd();
        }
      }
      return line;
    });
    
    // Remove multi-line comments /* ... */
    const joined = cleanedLines.join('\n');
    const cleaned = joined.replace(/\/\*[\s\S]*?\*\//g, '');
    
    fs.writeFileSync(filePath, cleaned);
    console.log(`Cleaned JS/JSX comments from: ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(fullPath);
    } else if (file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.jsx')) {
      removeCommentsFromFile(fullPath);
    }
  });
}

// Process frontend directory
console.log('Removing comments from frontend files...');
processDirectory('./frontend/src');

// Process backend directory
console.log('Removing comments from backend files...');
processDirectory('./backend');

// Process scraper directory
console.log('Removing comments from scraper files...');
processDirectory('./scraper');

// Process root JS files
const rootFiles = ['test-app.js', 'test-api.js'];
rootFiles.forEach(file => {
  if (fs.existsSync(file)) {
    removeCommentsFromFile(file);
  }
});

console.log('✅ All comments removed from codebase!');
