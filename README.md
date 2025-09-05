# Book Explorer

This is a full-stack web application that scrapes book data from [Books to Scrape](https://books.toscrape.com/), stores it in a MongoDB database, and provides a searchable and browsable interface using a React frontend.

## Project Structure

- `/scraper`: Contains the Node.js script to scrape book data.
- `/backend`: Contains the Node.js Express server to provide APIs for the book data.
- `/frontend`: Contains the React application for the user interface.

## Tech Stack

- **Scraper**: Node.js, Puppeteer, Mongoose
- **Backend**: Node.js, Express, Mongoose, CORS
- **Frontend**: React, Vite, Axios, React Router DOM, React Icons
- **Database**: MongoDB

## Setup and Installation

### Prerequisites

- Node.js (v14 or later)
- npm
- MongoDB (local instance or MongoDB Atlas)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd book-explorer
```

### 2. Setup MongoDB

Make sure your MongoDB server is running. The default connection string is `mongodb://localhost:27017/book-explorer`. You can change this in `scraper/scraper.js` and `backend/server.js`.

### 3. Install Dependencies

Install dependencies for each part of the project:

```bash
# Install scraper dependencies
cd scraper
npm install
cd ..
```

```bash
# Install backend dependencies
cd backend
npm install
cd ..
```

```bash
# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 4. Run the Scraper

This will populate your MongoDB database with book data.

```bash
cd scraper
npm start
```

### 5. Start the Backend Server

```bash
cd backend
npm start
```

The backend server will start on `http://localhost:5000`.

### 6. Start the Frontend Application

```bash
cd frontend
npm run dev
```

The frontend development server will start on `http://localhost:5173`.

## Deployment

### Backend (Render)

1.  Create a new Web Service on Render.
2.  Connect your GitHub repository.
3.  Set the Build Command to `npm install`.
4.  Set the Start Command to `npm start`.
5.  Add an environment variable for your MongoDB Atlas connection string.

### Frontend (Netlify/Vercel)

1.  Create a new project on Netlify or Vercel.
2.  Connect your GitHub repository.
3.  Set the Build Command to `npm run build`.
4.  Set the Publish Directory to `dist`.
5.  Add an environment variable for the backend API URL.

---
Aaryan Choudhary - Datence Tech
