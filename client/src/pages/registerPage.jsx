import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Card, Message, Button, Input, Label } from "../components/generalComponents";

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
            <Card>
                {registerErrors.map((error, i) => (
                    <Message message={error} key={i} />
                ))}
                <h1 className="text-3xl font-bold">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor="username">Username:</Label>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Write your name"
                        {...register("username")}
                        autoFocus
                    />
                    {errors.username?.message && (
                        <p className="text-red-500">{errors.username?.message}</p>
                    )}

                    <Label htmlFor="email">Email:</Label>
                    <Input
                        name="email"
                        placeholder="youremail@domain.tld"
                        {...register("email")}
                    />
                    {errors.email?.message && (
                        <p className="text-red-500">{errors.email?.message}</p>
                    )}

                    <Label htmlFor="password">Password:</Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="********"
                        {...register("password")}
                    />
                    {errors.password?.message && (
                        <p className="text-red-500">{errors.password?.message}</p>
                    )}

                    <Label htmlFor="confirmPassword">Confirm Password:</Label>
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="********"
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword?.message && (
                        <p className="text-red-500">{errors.confirmPassword?.message}</p>
                    )}
                    <Button>Submit</Button>
                </form>
                <p>
                    Already Have an Account?
                    <Link className="text-sky-500" to="/login">
                        Login
                    </Link>
                </p>
            </Card>
        </div>
    );
}

export default RegisterPage;
