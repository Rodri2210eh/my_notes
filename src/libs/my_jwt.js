import jwt from "jsonwebtoken";
import {SECRET_KEY} from "../config.js";

export function createAccessToken(payload){
    return new Promise((resolve, reject) => {
        
        jwt.sign(
            payload,
            SECRET_KEY,
            {
                expiresIn: "1d"
            },
            (error, token) => {
                if (error) reject(error);
                resolve(token)
            }
        );
    });
}
