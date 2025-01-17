# cruds-app
# Product API

This project is a simple Node.js API that allows you to manage products. It uses Express for the backend framework and MongoDB as the database. The application provides CRUD operations (Create, Read, Update, Delete) for managing products.

## Features
- Create, read, update, and delete products.
- MongoDB integration for storing product data.
- Environment variable configuration using `.env` file.
- Error handling middleware for robust error responses.
- Use of Express Router for clean API structure.

## Technologies Used
- **Node.js** - JavaScript runtime.
- **Express.js** - Web framework for Node.js.
- **MongoDB** - NoSQL database to store product data.
- **Mongoose** - MongoDB ODM to model data and interact with MongoDB.
- **dotenv** - Loads environment variables from a `.env` file.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/product-api.git
   cd product-api
   ```
   
2.Install dependencies:

```bash
npm install
```

3.Create a .env file in the root directory and add your MongoDB connection URL:

```bash
DATABASE_URL=mongodb://your-mongo-db-url
PORT=3000
```
   Replace your-mongo-db-url with your actual MongoDB connection string.

4.Start the application:

```bash
npm start
```
   The server will start and be available at http://127.0.0.1:3000.
