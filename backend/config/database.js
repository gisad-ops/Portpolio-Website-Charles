// Database configuration
// This file will contain database connection setup

const mongoose = require('mongoose');

// MongoDB connection string (to be set in .env)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/charles-portfolio';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
