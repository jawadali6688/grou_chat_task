import { useState, useEffect } from 'react';

const LoginPage = ({ onLogin }) => {
    const [name, setName] = useState('');

    useEffect(() => {
        const savedName = localStorage.getItem('userName');
        if (savedName) onLogin(savedName);
    }, [onLogin]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            localStorage.setItem('userName', name);
            onLogin(name);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gradient-to-r from-orange-500 to-orange-400">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white p-8 rounded-2xl shadow-lg w-80 space-y-6"
            >
                <h1 className="text-3xl font-bold text-orange-500 text-center">Join the Chat</h1>
                
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border-2 border-orange-500 rounded-md focus:outline-none focus:border-orange-600"
                    required
                />
                
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold 
                               transition-all duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 
                               focus:ring-orange-500 focus:ring-offset-2"
                >
                    Join
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
