import { useForm } from "react-hook-form";
import UseAuth from "../../../hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { SignInUser } = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (data) => {
        console.log('after login btn hit', data)
        SignInUser(data.email, data.password)
            .then(result => {
                console.log(result);
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
                <h2 className="text-4xl font-bold text-center">Welcome Back</h2>
                <p className="text-center">please Login</p>
                <fieldset className="fieldset">
                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" {...register("email", { required: true })} />

                    {errors.email?.type === 'required' && <p className="text-red-500">email is required</p>}

                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })} />

                    {
                        errors.password?.type === 'required' && <p className="text-red-500">password is required</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className="text-red-500">password must be at least 6 characters or longer</p>
                    }
                    {
                        errors.password?.type === "pattern" && <p className="text-red-500">password must contain at least one uppercase letter, one lowercase letter, one number, and one special character</p>
                    }


                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p>Don't have an account? <Link className="text-blue-800 underline" state={location.state} to='/register'>Register</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;