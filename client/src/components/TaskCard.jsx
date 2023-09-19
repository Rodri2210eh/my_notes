import { Link } from "react-router-dom";
import { useTasks } from "../context/tasksContext";
import { Card, Message, Button, ButtonLink, Label } from "../components/generalComponents";

export function TaskCard({ task }) {
    const { deleteTask } = useTasks();


    return (
        <Card>
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{task.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <Button onClick={() => deleteTask(task._id)} >Delete</Button>
                    <ButtonLink to={`/tasks/${task._id}`}>Edit</ButtonLink>
                </div>
            </header>
            <p className="text-slate-300">{task.description}</p>
            <p>{new Date(task.date).toLocaleDateString()}</p>
        </Card>
    );
}
