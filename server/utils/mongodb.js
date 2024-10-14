import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const connectMongoDB = () => {
    console.log("MongoDB Connected");
    return mongoose.connect("mongodb://localhost:27017/taskRabbit");
}