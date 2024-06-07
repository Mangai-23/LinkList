import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const connectToDatabase = async () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    const uri = process.env.MONGO_URI;

    if (!uri) {
        throw new Error('MongoDB URI is not defined in the environment variables');
    }

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
            socketTimeoutMS: 30000, // 30 seconds
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
};

export default connectToDatabase;
