import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Outlet,
    useNavigate,
  } from "react-router-dom";
  
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        // Here you can handle the login logic
        try{
            const response = await axios.post('http://localhost:3001/components/Login',{
                email: email,
                password: password,
            });

            navigate("/Home");

        } catch (error) {
            console.log(error);
            setTimeout(() => {
              navigate("/SignIn");
            }, 2500);
        }
        
    };

    return (
        <div className='w-full h-screen'>
            <img
                className='top-0 left-0 w-full h-screen object-cover'
                src='https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='/'
            />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'>
                <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-white text-center'>
                    <div className='bg-sky-200/30 p-8 rounded-3xl'>
                        <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
                        <form id="loginForm" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                                    Password:
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                type="submit"
                            >
                            
                                Login
                                
                            </button>
                            <button
                                className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                type="submit"
                            >
                            
                                Sign in
                                
                            </button>
                        </form>

                        <div className="text-center mt-6">
                            <p className="text-gray-300 hover:text-rose-700 text-sm">
                            <Link to ="/ForgotPassword">
                                Forgot password?
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;