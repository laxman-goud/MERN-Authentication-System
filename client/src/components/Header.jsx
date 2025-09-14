import React, { useContext } from 'react' 
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

// Header section showing greeting, welcome text, and CTA button
const Header = () => {

    // Access user data from global context
    const { userData } = useContext(AppContext);

    return (
        <div className='flex flex-col items-center mt-20 px-4 text-center text-gray-800'>
            {/* Profile / header image */}
            <img src={assets.header_img} alt="header_img" className='w-36 h-36 rounded-full mb-6' />

            {/* Greeting message with user name or fallback */}
            <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>
                Hey { userData ? userData.name : "Developer!"}
                <img src={assets.hand_wave} alt="hand_wave" className='w-8 aspect-square' />
            </h1>

            {/* Welcome heading */}
            <h2 className='text-3xl sm:text-5xl font-semibold mb-4'>Welcome to our app</h2>

            {/* Small description */}
            <p className='mb-8 max-w-md'>
                Your one-stop solution for seamless authentication and user management.
            </p>

            {/* Call-to-action button */}
            <button className='border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all'>
                Get Started
            </button>
        </div>
    )
}

export default Header
