import axios, { Axios } from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// Ensure cookies (JWT) are sent with every request
axios.defaults.withCredentials = true;

// Create global context
export const AppContext = createContext();

export const AppProvider = (props) => {

    // Backend API base URL (from .env)
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // Global state for auth and user data
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(false);

    // Check if user is authenticated
    const getAuthState = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/auth/is-auth', { withCredentials: true });
            if (data.success) {
                setIsLoggedin(true);
                getUserData(); // fetch user details if authenticated
            }
        } catch (error) {
            // Handle unauthorized state
            if (error.response && error.response.status === 401) {
                setIsLoggedin(false);
                setUserData(false);
            } else {
                toast.error("Error checking auth state");
            }
        }
    };

    // Fetch user details from backend
    const getUserData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/data', { withCredentials: true });
            data.success ? setUserData(data.userData) : toast.error(data.message);
        } catch (error) {
            // Avoid duplicate error toast on unauthorized
            if (!(error.response && error.response.status === 401)) {
                toast.error("Failed to load user data");
            }
        }
    };

    // Run once on app load
    useEffect(() => {
        getAuthState();
    }, []);

    // Provide global state and functions
    const value = {
        backendUrl,
        isLoggedin, setIsLoggedin,
        userData, setUserData,
        getUserData
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
