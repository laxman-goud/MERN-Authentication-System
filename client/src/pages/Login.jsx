import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios'
import { toast } from 'react-toastify';

// Send cookies with requests
axios.defaults.withCredentials = true;

const Login = () => {

    const navigate = useNavigate();
    const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContext);

    // Local form state
    const [state, setState] = useState('Sign Up'); // toggle between Sign Up / Login
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            if (state === 'Sign Up') {
                // Register new user
                const { data } = await axios.post(backendUrl + '/api/auth/register', { name, email, password });
                if (data.success) {
                    setIsLoggedin(true);
                    getUserData();
                    navigate('/');
                } else {
                    toast.error(data.message);
                }
            } else {
                // Login existing user
                const { data } = await axios.post(backendUrl + '/api/auth/login', { email, password });
                if (data.success) {
                    setIsLoggedin(true);
                    getUserData();
                    navigate('/');
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen px-6 sm:px-4 bg-gradient-to-br from-blue-200 to-purple-400'>
            {/* Logo with redirect to home */}
            <img onClick={() => { navigate('/') }} src={assets.logo} alt="logo" className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer' />
            
            {/* Form container */}
            <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm'>
                {/* Title */}
                <h2 className='text-3xl font-semibold text-white text-center mb-3'>
                    {state === 'Sign Up' ? "Create Account" : "Login Account!"}
                </h2>
                <p className='text-center text-sm mb-6'>
                    {state === 'Sign Up' ? "Create your account" : "Login to your account!"}
                </p>

                {/* Form */}
                <form onSubmit={onSubmitHandler}>
                    {/* Show name field only in Sign Up */}
                    {state === 'Sign Up' && (
                        <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
                            <img src={assets.person_icon} alt="person_icon" />
                            <input
                                onChange={e => setName(e.target.value)} value={name}
                                className='bg-transparent outline-none'
                                type="text" placeholder='Full Name' required
                            />
                        </div>
                    )}
                    {/* Email field */}
                    <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
                        <img src={assets.mail_icon} alt="mail_icon" />
                        <input
                            onChange={e => setEmail(e.target.value)} value={email}
                            className='bg-transparent outline-none' type="email" placeholder='Email id' required
                        />
                    </div>
                    {/* Password field */}
                    <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
                        <img src={assets.lock_icon} alt="lock" />
                        <input
                            onChange={e => setPassword(e.target.value)} value={password}
                            className='bg-transparent outline-none' type="password" placeholder='Password' required
                        />
                    </div>
                    {/* Forgot password link */}
                    <p onClick={() => { navigate('/reset-password') }} className='mb-4 text-indigo-500 cursor-pointer'>
                        Forgot password?
                    </p>
                    {/* Submit button */}
                    <button className='w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium'>
                        {state}
                    </button>
                </form>

                {/* Switch between Sign Up / Login */}
                {state === 'Sign Up' ? (
                    <p className='text-gray-400 text-center text-xs mt-4'>
                        Already have an Account?{' '}
                        <span onClick={() => { setState('Login') }} className='text-blue-400 cursor-pointer underline'>
                            Login here
                        </span>
                    </p>
                ) : (
                    <p className='text-gray-400 text-center text-xs mt-4'>
                        Don't have an account?{' '}
                        <span onClick={() => { setState('Sign Up') }} className='text-blue-400 cursor-pointer underline'>
                            Sign up
                        </span>
                    </p>
                )}
            </div>
        </div>
    )
}

export default Login