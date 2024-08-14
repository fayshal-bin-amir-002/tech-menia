import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { imageUpload } from "../utils/imageUpload";
import toast from "react-hot-toast";

const Register = () => {

    const { user, userRegister, userGoogleLogin, updateUserProfile, userLogOut } = useAuth();

    const navigate = useNavigate();

    const [processing, setProcessing] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.files[0];

        if(password.length < 6) {
            setProcessing(false);
            return toast.error("Minimum password length is 6!")
        }

        try {
            const photo_url = await imageUpload(photo);

            await userRegister(email, password);
            await updateUserProfile(name, photo_url);
            await userLogOut();
            setProcessing(false);
            navigate("/login");
            toast.success("Registration successful.");

        } catch (error) {
            setProcessing(false);
            toast.error(error.message);
        }
    }

    const handleGoogleLogin = async () => {
        setProcessing(true);
        await userGoogleLogin()
            .then(() => {
                setProcessing(false);
                navigate("/");
                toast.success("Logged in successfully.");
            })
            .catch((error) => {
                setProcessing(false);
                toast.error(error.message);
            })
    }

    if (user) return <Navigate to="/"></Navigate>

    return (
        <div className="min-h-screen flex items-center justify-center w-full">
            <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Create Your Account!</h1>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                        <input name="name" type="text" id="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your Name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                        <input name="email" type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                        <input type="password" name="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Photo</label>
                        <input type="file" name="photo" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
                    </div>
                    <button disabled={processing} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-not-allowed">Register</button>
                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} disabled={processing} className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100 w-full disabled:cursor-not-allowed">
                    <div className="px-4 py-3">
                        <svg className="h-6 w-6" viewBox="0 0 40 40">
                            <path
                                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                fill="#FFC107" />
                            <path
                                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                fill="#FF3D00" />
                            <path
                                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                fill="#4CAF50" />
                            <path
                                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                fill="#1976D2" />
                        </svg>
                    </div>
                    <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                </button>
                <div className="mt-6">
                    <small>Already have an account? <Link to="/login" className="font-medium text-[#DC5F00] cursor-pointer hover:underline">Login</Link></small>
                </div>
            </div>
        </div >
    );
};

export default Register;