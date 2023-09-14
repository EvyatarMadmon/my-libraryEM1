import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // כאן תוכל להוסיף לוגיקה לשחזור הסיסמה, כמו לשלוח בקשה לשרת עם האימייל שנרשם ולקבל תשובה מהשרת
        // כרגע, הדוגמה מציגה הודעה פשוטה עבור הדוגמה
        setMessage(`An email has been sent to ${email} with instructions to reset your password.`);
    };

    return (
        <div className='w-full h-screen'>
            <img
                className='top-0 left-0 w-full h-screen object-cover'
                src='https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='/'
            />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-white' />
            <div className="max-w-md w-full space-y-8">
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-auto z-10'>
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200 mb-5">Forgot Password</h2>
                        <p className="mt-2 text-center text-sm text-white">
                            Enter your email address and we'll send you a link to reset your password.
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-3 border border-transparent text-sm font-medium rounded-none text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Reset Password
                            </button>
                        </div>
                    </form>
                    {message && (
                        <div className="mt-4">
                            <p className="text-center text-sm text-gray-600">{message}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
