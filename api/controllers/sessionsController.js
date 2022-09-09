import Session from "../models/sessions.js";


export const createSession = async (req, res, next) => {
    const newSession = new Session(req.body);
    try {
        const savedSession = await newSession.save();
        res.status(200).json(savedSession);
    } catch (error) {
        next(error);
    }
}

export const getaSession = async (req, res, next) => {
    try {
        const session = await Session.findById(req.params.id);
        res.status(200).json(session);
    } catch (error) {
        next(error);
    }
}

export const getallSession = async (req, res, next) => {
    try {
        const session = await Session.find();
        res.status(200).json(session);
    } catch (error) {
        next(error);
    }
}