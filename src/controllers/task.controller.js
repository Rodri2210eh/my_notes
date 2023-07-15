import Task from "../models/task.model.js"

export const getTasks = async (req, res) => {
    const allTask = await Task.find({ user: req.user.id }).populate('user');
    res.json(allTask);
}

export const getTask = async (req, res) => {
    try {
        const taskFound = await Task.findById(req.params.id).populate('user');
        if (!taskFound) return res.state(404).json({ message: "Task not found" });
        res.json(taskFound);
    } catch (error) {
        return res.state(404).json({ message: "Task not found" });
    }
}

export const createTask = async (req, res) => {
    try {
        const { title, description, deadline } = req.body;
        const newTask = new Task({ title, description, deadline, user: req.user.id });
        const savedTask = await newTask.save();
        console.log("savedTask: ", savedTask);
        res.json(savedTask);
    } catch (error) {
        return res.state(404).json({ message: "Error creating task" });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        console.log(deletedTask);
        if (!deletedTask) return res.state(404).json({ message: "Task not found" });
        res.sendStatus(204);
    } catch (error) {
        return res.state(404).json({ message: "Task not found" });
    }
}

export const updateTask = async (req, res) => {
    try {
        const taskFound = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!taskFound) return res.state(404).json({ message: "Task not found" });
        res.json(taskFound);
    } catch (error) {
        return res.state(404).json({ message: "Task not found" });
    }
}