import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import sessionsRoute from "./routes/sessions.js";
import usersRoute from "./routes/users.js";

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
});

app.use(express.json());
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something got wrong";
    return res.status(500).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/sessions", sessionsRoute);



app.listen(8000, () => {
    connect();
    console.log("Connected to backend");
})