import { useForm } from "react-hook-form";
import { useTasks } from "../context/tasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/generalComponents";
import { Textarea } from "../components/generalComponents/Textarea";

dayjs.extend(utc);

function TaskFormPage() {
    const { register, handleSubmit, setValue, formState: { errors }, } = useForm();
    const { createTask, getTask, updateTask } = useTasks();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                const task = await getTask(params.id);
                setValue("title", task.title);
                setValue("description", task.description);
                setValue(
                    "date",
                    task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
                );
                setValue("completed", task.completed);
            }
        };
        loadTask();
    });

    const onSubmit = handleSubmit((data) => {
        try {
            if (params.id) {
                updateTask(params.id, {
                    ...data,
                    date: dayjs.utc(data.date).format(),
                });
            } else {
                createTask({
                    ...data,
                    date: dayjs.utc(data.date).format(),
                });
            }
            navigate('/tasks');
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="title">Title</Label>
                <Input
                    type="text"
                    name="title"
                    placeholder="Title"
                    {...register("title")}
                    autoFocus
                />
                {errors.title && (
                    <p className="text-red-500 text-xs italic">Please enter a title.</p>
                )}

                <Label htmlFor="description">Description</Label>
                <Textarea
                    name="description"
                    id="description"
                    rows="3"
                    placeholder="Description"
                    {...register("description")}
                ></Textarea>

                <Label htmlFor="date">Date</Label>
                <Input type="date" name="date" {...register("date")} />
                <Button>Save</Button>
            </form>
        </Card>
    )
}

export default TaskFormPage;