# Backend Server Configuration

This folder contains the backend API server for the portfolio website.

## Structure

- **routes/** - API endpoint definitions
- **controllers/** - Business logic for each route
- **models/** - Data models and schemas
- **middleware/** - Custom middleware functions
- **config/** - Configuration files and constants
- **server.js** - Main server entry point (to be created)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file:
   ```
   PORT=5000
   NODE_ENV=development
   ```

3. Start the server:
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

## Available Routes

To be implemented:
- `POST /api/contact` - Contact form submission
- `GET /api/projects` - Fetch projects list
- `GET /api/skills` - Fetch skills

## API Documentation

API docs will be added as endpoints are implemented.
