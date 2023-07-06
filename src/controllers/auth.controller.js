import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

import { createAccessToken } from "../libs/my_jwt.js";
import { SECRET_KEY } from "../config.js";

export const register = async (req, res) => {

    const { email, password, username } = req.body
    try {
        const userFound = await User.findOne({ email })

        if (userFound) return res.status(400).json(['Email already exists']);

        const hashPasword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashPasword
        });

        const userSaved = await newUser.save();
        console.log("Registro exitoso");

        const token = await createAccessToken({ id: userSaved._id });

        res.cookie('token', token);
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updateAt: userSaved.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body
    try {

        const findUser = await User.findOne({ email })

        if (!findUser) return res.status(400).json({ message: "User don't exist" });

        const isCorrect = await bcrypt.compare(password, findUser.password);

        if (!isCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = await createAccessToken({ id: findUser._id });

        res.cookie('token', token);

        res.json({
            id: findUser._id,
            username: findUser.username,
            email: findUser.email,
            createdAt: findUser.createdAt,
            updateAt: findUser.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    });
    res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)

    if (!userFound) return res.status(400).json({ message: "User not found" });
};

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, SECRET_KEY, async (error, user) => {
        if (error) return res.status(401).json({ message: "Unauthorized" });

        const userFound = await User.findById(user.id);

        if (!userFound) return res.status(401).json({ message: "Unauthorized" });

        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
    });

};