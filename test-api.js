const axios = require('axios');

async function testAPI() {
  try {
    console.log('Testing API at http://localhost:5000/api/books...');
    const response = await axios.get('http://localhost:5000/api/books');
    console.log('✅ API Response:', {
      status: response.status,
      totalBooks: response.data.totalBooks,
      booksFound: response.data.books?.length || 0,
      sampleTitles: response.data.books?.slice(0, 3)?.map(book => book.title) || []
    });
  } catch (error) {
    console.error('❌ API Error:', {
      message: error.message,
      code: error.code,
      response: error.response?.status,
      responseData: error.response?.data
    });
  }
}

testAPI();
