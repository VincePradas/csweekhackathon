import React, { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_URL = "https://ecomwebapi-gsbbgmgbfubhc8hk.canadacentral-01.azurewebsites.net";

    const decodeToken = (token) => {
        const decoded = token ? JSON.parse(atob(token.split('.')[1])) : null;
        return decoded ? decoded.userId : null;
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
            console.log(response.data);
            const { token } = response.data;
            const userId = decodeToken(token);

            localStorage.setItem('authToken', token);
            localStorage.setItem('userId', userId);

            setUser({ token, userId });
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
