import Task from "../models/task.model.js"

export const getTasks = async (req, res) => {
    const allTask = await Task.find({ user: req.user.id }).populate('user');
    res.json(allTask);
}

export const getTask = async (req, res) => {
    const taskFound = await Task.findById(req.params.id).populate('user');
    if (!taskFound) return res.state(404).json({ message: "Task not found" })
    res.json(taskFound);
}

export const createTask = async (req, res) => {
    const { title, description, deadline } = req.body;
    const newTask = new Task({ title, description, deadline, user: req.user.id });
    const savedTask = await newTask.save();
    console.log("savedTask: ", savedTask)
    res.json(savedTask);
}

export const deleteTask = async (req, res) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    console.log(deletedTask);
    if (!deletedTask) return res.state(404).json({ message: "Task not found" })
    res.sendStatus(204);
}

export const updateTask = async (req, res) => {
    const taskFound = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!taskFound) return res.state(404).json({ message: "Task not found" })
    res.json(taskFound);
}