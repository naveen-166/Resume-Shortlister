import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from "../assets/login.jpg";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/register', { email, password });
            setMessage(response.data.message);
            if (response.data.success) {
                navigate('/login');
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
        <div className="relative flex flex-col items-center w-full max-w-md mx-4 p-8 rounded-xl bg-white/30 backdrop-blur-md  shadow-lg font-Kanit">
            <h3 className="text-center text-3xl font-bold mb-6 text-gray-900">Register</h3>
            <form onSubmit={handleRegister} className="w-full flex flex-col space-y-6">
                <label htmlFor="email" className="text-lg font-medium text-gray-900">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="password" className="text-lg font-medium text-gray-900">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="confirmPassword" className="text-lg font-medium text-gray-900">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm your password"
                    className="p-3 border border-gray-300 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300"
                >
                    Register
                </button>
                <a href='/login' className='text-center text-blue-500 hover:text-blue-600 hover:transition hover:duration-200'>Already User</a>
            </form>
            {message && <p className="text-red-500 text-sm text-center mt-4">{message}</p>}
        </div>
    </div>
    
    );
}

export default Register;
