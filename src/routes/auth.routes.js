import { Router } from "express";
import { register,login,logout,profile } from "../controllers/auth.controller.js";
import { requireTokenAuth } from "../middlewares/validateToken.js";

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', requireTokenAuth, profile);

export default router;