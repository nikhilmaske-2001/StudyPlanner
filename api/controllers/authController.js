import User from "../models/user.js";

export const register = async (req, res, next) => {
    try {
        const newUser = new User({
            email: req.body.email,
            password: req.body.password,
        });

        await newUser.save();
        res.status(200).send("User has been created");
    } catch (error) {
        next(error);
    }
}