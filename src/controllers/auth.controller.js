import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { createAccessToken } from "../libs/my_jwt.js";

export const register = async (req, res) => {
    console.log(req.body);
    const {email, password, username} = req.body
    try {
        const hashPasword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            hashPasword
        });
        const userSaved = await newUser.save();
        console.log("Registro exitoso");

        const token = await createAccessToken({id: userSaved._id});

        res.cookie('token', token);
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updateAt: userSaved.updatedAt,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const login = async (req, res) => {
    console.log(req.body);
    const {email, password} = req.body
    try {

        const findUser = await User.findOne({email})

        if (!findUser) return res.status(400).json({message: "User don't exist"})

        const isCorrect = await bcrypt.compare(password, findUser.password);

        if (!isCorrect) return res.status(400).json({message: "Invalid credentials"})

        const token = await createAccessToken({id: findUser._id});

        res.cookie('token', token);
        res.json({
            id: findUser._id,
            username: findUser.username,
            email: findUser.email,
            createdAt: findUser.createdAt,
            updateAt: findUser.updatedAt,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const logout = (req, res) => {
    res.cookie("token", "",{
        expires: new Date(0)
    });
    res.sendStatus(200);
}