import { Router } from "express";
import { requireTokenAuth } from "../middlewares/validateToken";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/task.controller";

import { schemaValidator } from "../middlewares/schemaValidor.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get('/tasks', requireTokenAuth, getTasks);
router.get('/tasks/:id', requireTokenAuth, getTask);
router.post('/tasks', requireTokenAuth, schemaValidator(createTaskSchema), createTask);
router.delete('/tasks/:id', requireTokenAuth, deleteTask);
router.put('/tasks/:id', requireTokenAuth, updateTask);

export default router;