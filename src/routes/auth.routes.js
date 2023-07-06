import { Router } from "express";
import { register, login, logout, profile, verifyToken } from "../controllers/auth.controller.js";
import { requireTokenAuth } from "../middlewares/validateToken.js";
import { schemaValidator } from "../middlewares/schemaValidor.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post('/register', schemaValidator(registerSchema), register);
router.post('/login', schemaValidator(loginSchema), login);
router.post('/logout', logout);
router.get('/profile', requireTokenAuth, profile);
router.get('/auth/verify-access', verifyToken);

export default router;