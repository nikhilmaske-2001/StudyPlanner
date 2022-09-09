import express from "express";
import Session from "../models/sessions.js";

const router = express.Router();

//Create new session
router.post("/", async (req, res) => {
    const newSession = new Session(req.body);
    try {
        const savedSession = await newSession.save();
        res.status(200).json(savedSession);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get a session
router.get("/:id", async (req, res) => {
    try {
        const session = await Session.findById(req.params.id);
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get all sessions
router.get("/", async (req, res) => {
    const failed = true;

    if (failed) return next(createError(401, "You are not authenticated"));
    try {
        const sessions = await Session.findNyId("AEF");
        res.status(200).json(sessions);
    } catch (error) {
        next(error);
    }
});


export default router;