import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongodb");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
})

app.use("/api/auth", authRoute);

app.listen(8000, () => {
    connect();
    console.log("Connected to backend");
})