// =======================
// config/mongodb.js
// =======================

import mongoose from "mongoose";

// Function to connect to MongoDB database
const connectDB = async () => {
    try {
        // Connects using MONGODB_URI from .env and appends "mern-auth" DB name
        await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
        console.log("Database connected");
    } catch (error) {
        console.log(error); // Logs connection errors
    }
};

export default connectDB;
