import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";

import { Card, Message, Button, Input, Label } from "../components/generalComponents";

function LoginPage() {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { signIn, errors: loginErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks');
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (data) => {
        signIn(data)
    });

    return (
        <div className="h-[calc(100vh-100px)] flex items-start justify-center mt-48">
            <Card>
                {loginErrors.map((error, i) => (
                    <Message message={error} key={i} />
                ))}
                <h1 className="text-2xl font-bold">Login</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor="email">Email:</Label>
                    <Input
                        label="Write your email"
                        type="email"
                        name="email"
                        placeholder="youremail@domain.tld"
                        {...register("email", { required: true })}
                    />
                    <p>{errors.email?.message}</p>

                    <Label htmlFor="password">Password:</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Write your password"
                        {...register("password", { required: true, minLength: 6 })}
                    />
                    <p>{errors.password?.message}</p>

                    <Button>Login</Button>
                </form>

                <p className="flex gap-x-2 justify-between">
                    Don't have an account? <Link to="/register" className="text-[#f98866]"> Sign up</Link>
                </p>
            </Card>
        </div>
    )
}

export default LoginPage