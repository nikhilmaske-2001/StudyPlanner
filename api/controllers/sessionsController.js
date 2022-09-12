import Session from "../models/sessions.js";
import User from "../models/user.js";


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

export const joinsession = async (req, res, next) => {
    try {
        const session = await Session.findById(req.body.session);
        const user = await User.findById(req.body.User);
        if (!session.students.includes(user)) {
            session.students.push(user.id);
            session.save();
            res.status(200).json(session);
        }
    } catch (error) {
        next(error);
    }
}

export const checksession = async (req, res, next) => {
    try {
        const session = await Session.findById(req.body.session);
        const user = req.body.User;
        const students = session.students
        const checking = students.includes(user);
        res.status(200).json(checking);
    } catch (error) {
        next(error);
    }
}

export const checksessionsize = async (req, res, next) => {
    try {
        const session = await Session.findById(req.body.session);
        const limit = session.studentsLimit;
        const currentSize = session.students.length;
        console.log(currentSize);
        if (currentSize >= limit) {
            const full = true;
            res.status(200).json(full);
        } else {
            const full = false;
            res.status(200).json(full);
        }
    } catch (error) {
        next(error);
    }
}