import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Database is already connected")
        return
    }

    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
        throw new Error("MONGODB_URI is not defined in environment variables.");
    }
    console.log("MongoDB URI:", mongoUri);


    try {
        const db = await mongoose.connect(mongoUri);

        connection.isConnected = db.connections[0].readyState
        console.log("DB connected successfully", connection.isConnected)
    } catch (error) {
        console.log("Databse connection failed", error)
        process.exit(1);
    }
}

export default dbConnect;