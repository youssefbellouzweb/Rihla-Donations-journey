// src/pages/AdminLoginPage.jsx

import React, { useState } from 'react';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // On successful login, this will be handled by our main router.
            // For now, you can check the console.
            alert('Login successful!');
        } catch (err) {
            setError('Failed to log in. Please check your email and password.');
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-brand-dark text-white">
            <div className="w-full max-w-md p-8 space-y-8 bg-black/30 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center font-display">Rihla Admin Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-400">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-400">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-3 font-bold text-white bg-brand-blue rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Log In
                    </button>
                    {error && <p className="text-sm text-center text-red-500">{error}</p>}
                </form>
            </div>
        </div>
    );
}