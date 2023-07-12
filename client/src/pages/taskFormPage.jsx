import { useForm } from "react-hook-form";
import { useTasks } from "../context/tasksContext";
import { useNavigate } from "react-router-dom";


function TaskFormPage() {
    const { register, handleSubmit } = useForm();
    const { createTask } = useTasks();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        createTask(data);
        navigate('/tasks');
    });

    return (
        <div className="h-[calc(100vh-100px)] flex items-center justify-center">
            <div className="bg-zinc-800 max-w-md w-full p-8 rounded-md">
                <h1 className="text-2xl font-bold my-1">New Note</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Title"
                        {...register("title")}
                        autoFocus
                        className="w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2"
                    />
                    <textarea rows="3" placeholder="Description"
                        {...register("description")}
                        className="w-full bg-zinc-700 text-white px-4 py-4 rounded-md my-2"
                    />
                    <button className="bg-slate-700 px-4 py-1 rounded-sm">Save</button>
                </form>
            </div>
        </div>
    )
}

export default TaskFormPage;