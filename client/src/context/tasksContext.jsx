import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTaskRequest, getTasksRequest, deleteTaskRequest, updateTaskRequest } from "../api/task";


export const TasksContext = createContext();

export const useTasks = () => {
    const context = useContext(TasksContext);
    if (!context) throw new Error("useContext must be used within a TasksProvider");
    return context;
}

export const TasksProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {


        try {
            const res = await getTasksRequest();
            console.log(res)
            setTasks(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const createTask = async (task) => {
        try {
            const res = await createTaskRequest(task)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id);
            console.log(res)
            if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateTask = async (id, task) => {
        try {
            await updateTaskRequest(id, task);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TasksContext.Provider value={{ tasks, createTask, getTasks, getTask, updateTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    );
};