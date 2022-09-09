import express from "express";
import { createSession, getallSession, getaSession } from "../controllers/sessionsController.js";

const router = express.Router();

//Create new session
router.post("/", createSession);

//Get a session
router.get("/:id", getaSession);

//Get all sessions
router.get("/", getallSession);


export default router;