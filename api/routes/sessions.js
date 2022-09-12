import express from "express";
import { createSession, getallSession, getaSession, joinsession, checksession } from "../controllers/sessionsController.js";

const router = express.Router();

//Create new session
router.post("/", createSession);

//Get a session
router.get("/:id", getaSession);

//Get all sessions
router.get("/", getallSession);

//Join a session
router.post("/joinsession", joinsession);

//check session contains user
router.post("/checksession", checksession);


export default router;