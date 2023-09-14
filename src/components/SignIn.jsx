import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthdate: '',
        gender: 'male',
        address: '',
        phoneNumber: '',
        // ניתן להוסיף יותר שדות כאן לפי הצורך
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // כאן תוכל להוסיף לוגיקה נוספת לחיפוש, כמו לשלב את formData בשאילתת ההרשמה או לעשות משהו אחר
        alert('Form submitted with data: ' + JSON.stringify(formData));
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
                            value={formData.firstName}
                            onChange={handleChange}
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
                            value={formData.lastName}
                            onChange={handleChange}
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
                            value={formData.birthdate}
                            onChange={handleChange}
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
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                  
                    {/* ניתן להוסיף כאן יותר שדות לפי הצורך */}
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700/30 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                        >
                        <Link to ="/Login">
                            Sign-in
                            </Link>
                        </button>
                    </div>
                </form>

        </div>
    );
};

export default SignIn;
