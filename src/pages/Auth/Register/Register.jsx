import { useForm } from "react-hook-form";
import UseAuth from "../../../hooks/UseAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { registerUser } = UseAuth();

    const handleRegistration = (data) => {
        console.log('after registration', data);
        const profileImg = data.photo[0];


        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                const formdata = new FormData();
                formdata.append('image', profileImg);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
                <h2 className="text-4xl font-bold text-center">Welcome to zap shift</h2>
                <p className="text-center">please register</p>
                <fieldset className="fieldset">
                    {/* name field */}
                    <label className="label">Name</label>
                    <input type="text" className="input" {...register('name', { required: true })} placeholder="Name" />
                    {errors.name?.type === 'required' && <p className="text-red-500">
                        Name is required
                    </p>}
                    {/* photo  field */}
                    <label className="label">photo</label>
                    <input type="file" className="file-input" {...register('photo', { required: true })} placeholder="Your photo" />
                    {errors.photo?.type === 'required' && <p className="text-red-500">
                        photo is required
                    </p>}


                    {/* email */}
                    <label className="label">Email</label>
                    <input type="email" className="input" {...register('email', { required: true })} placeholder="Email" />
                    {errors.email?.type === 'required' && <p className="text-red-500">
                        Email is required
                    </p>}


                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" className="input" {...register('password', {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                    })} placeholder="Password" />
                    {errors.password?.type === 'required' && <p className="text-red-500">
                        Password is required
                    </p>
                    },
                    {
                        errors.password?.type === 'minLength' && <p className="text-red-500">
                            Password must be at least 6 characters or longer
                        </p>
                    },
                    {
                        errors.password?.type === "pattern" && <p className="text-red-500">
                            Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character
                        </p>
                    }
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <p>Already have an account? <Link className="text-blue-800 underline" to='/login'>login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;