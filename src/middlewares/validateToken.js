import jwt from "jsonwebtoken";
import {SECRET_KEY} from "../config.js";

export const requireTokenAuth = (req, res, next) => {
    const {token} = req.cookies;

    if (!token) return res.status(401).json({message:"Unauthorized"});

    jwt.verify(token,SECRET_KEY, (error, user) => {
        if (error) return res.status(403).json({message:"Invalid token"});

        req.user = user;

        next();
    });

}