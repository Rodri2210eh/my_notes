import { Router } from "express";
import { requireTokenAuth } from "../middlewares/validateToken";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/task.controller";

const router = Router();

router.get('/tasks', requireTokenAuth, getTasks);
router.get('/tasks/:id', requireTokenAuth,getTask);
router.post('/tasks', requireTokenAuth,createTask);
router.delete('/tasks/:id', requireTokenAuth,deleteTask);
router.put('/tasks/:id', requireTokenAuth,updateTask);

export default router;