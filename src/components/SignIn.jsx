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

const SignIn = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // כאן תוכל להוסיף לוגיקה נוספת לחיפוש, כמו לשלב את formData בשאילתת ההרשמה או לעשות משהו אחר
        try{
            console.log("hen yair the king ");
            const response = await axios.post('http://localhost:3001/components/SingIn',{
            firstName:firstName,
            lastName:lastName,
            birthdate:birthdate,
            gender:gender,
            Email:email,
            Password:password,
        });
        navigate("/Home");
        } catch (error) {
            console.log(error);
            setTimeout(() => {
              navigate("/Login");
            }, 2500);
        }
    };

    return (
        <div className='w-full h-screen relative'>
            <img
                className='top-0 left-0 w-full h-screen object-cover'
                src='https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='/'
            />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-white' />


            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white' />

            <form
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-auto z-10'
                onSubmit={handleSubmit}
            >
                <h2 className='text-4xl text-center text-yellow-400 font-bold mb-6'>Registration form</h2>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="firstName">
                        First name:
                    </label>
                    <input
                        className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="lastName">
                        Last Name:
                    </label>
                    <input
                        className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="birthdate">
                        birthdate:
                    </label>
                    <input
                        className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="birthdate"
                        name="birthdate"
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="gender">
                        Gender:
                    </label>
                    <select
                        className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="gender"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="lastName">
                        Email:
                    </label>
                    <input
                        className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="lastName">
                        Password:
                    </label>
                    <input
                        className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="lastName">
                        Confirm Password:
                    </label>
                    <input
                        className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.Password}
                        onChange={handleChange}
                        required
                    />
                </div> */}

                {/* ניתן להוסיף כאן יותר שדות לפי הצורך */}
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700/30 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    >

                        Sign-in
                        
                    </button>
                </div>
            </form>

        </div>
    );
};

export default SignIn;
