import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

// Top navigation bar with logo, login button, and user menu
const NavBar = () => {
    
    const navigate = useNavigate();
    const { userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContext);
    
    // Logout function → clears session and resets state
    const logout = async () => {
        try {
            axios.defaults.withCredentials = true;
            const { data } = await axios.post(backendUrl + '/api/auth/logout');
            if (data.success) {
                setIsLoggedin(false);
                setUserData(false);
                navigate('/');
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    // Send verification OTP to user's email
    const sendVerificationOtp = async () => {
        try {
            axios.defaults.withCredentials = true;
            const { data } = await axios.post(backendUrl + '/api/auth/send-verify-otp');
            if (data.success) {
                navigate('/verify-email');
                toast.success(data.message);
            } else {
                toast.error(data.message);  
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0'>
            {/* App logo */}
            <img src={assets.logo} alt="logo" />

            {userData ? (
                // If logged in → show profile avatar with dropdown
                <div className='w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group'>
                    {userData.name[0].toUpperCase()}
                    <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10'>
                        <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>
                            {/* Verify email option if not verified */}
                            {!userData.isVerified && (
                                <li onClick={sendVerificationOtp} className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Verify email</li>
                            )}
                            {/* Logout option */}
                            <li onClick={logout} className='py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10'>Logout</li>
                        </ul>
                    </div>
                </div>
            ) : (
                // If not logged in → show login button
                <button 
                    onClick={() => navigate('/login')}
                    className='flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all'>
                    Login <img src={assets.arrow_icon} alt="arrow_icon" />
                </button>
            )}
        </div>
    )
}

export default NavBar