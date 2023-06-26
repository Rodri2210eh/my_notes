import { Router } from "express";
import { requireTokenAuth } from "../middlewares/validateToken";

const router = Router();

router.get('/task', requireTokenAuth,(req, res) => {

});

export default router;