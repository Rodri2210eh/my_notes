import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (data) => {
        signUp(data);
    });
    return (
        <div className="h-[calc(100vh-100px)] flex items-center justify-center">
            <div className="bg-zinc-800 max-w-md p-10 rounded-md">
                {
                    registerErrors.map((error, i) => (
                        <div className="bg-red-500 p-2 text-white text-center" key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className="text-2xl font-bold">Register</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" {...register('username', { required: true, minLength: 5 })} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Username" />
                    {
                        errors.username && (<p className="text-red-500">Username is required</p>)
                    }
                    <input type="email" {...register('email', { required: true })} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Email" />
                    {
                        errors.email && (<p className="text-red-500">Email is required</p>)
                    }
                    <input type="password" {...register('password', { required: true, minLength: 8 })} className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Password" />
                    {
                        errors.password && (<p className="text-red-500">Password is required</p>)
                    }
                    <button type="submit">Register</button>
                </form>
                <p className="flex gap-x-2 justify-between">
                    Already have an account? <Link to="/login" className="text-sky-500">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;
