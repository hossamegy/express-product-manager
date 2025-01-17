require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/error-handler');
const connectDB = require('./config/dbConn');

const app = express();

const PORT = process.env.PORT || "3000";
const HOST_NAME = "127.0.0.1";

// connect to mongodb
connectDB();

// middleware
app.use(express.json())
app.get('/hello', (req, res) => {
    res.send("hello, it is runnig");
});

// routs
app.use('/api/v1/products', require('./routes/products'));


// middleware
app.use(errorHandler);

mongoose.connection.once('open', () => {
        console.log('Connect to mongoDB');
        app.listen(PORT, HOST_NAME, () => {
            console.log(`Server running on http://${HOST_NAME}:${PORT}`);
    });
})

