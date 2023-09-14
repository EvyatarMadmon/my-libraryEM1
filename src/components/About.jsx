import React from 'react';

function About() {
    return (
        <div className='w-full h-screen relative'>
            <img
                className='top-0 left-0 w-full h-screen object-cover z-[-1]'
                src='https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='/'
            />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'>
                <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-white'>
                    <div className='flex space-x-6'>
                        <div className='w-48 h-48 overflow-y-hidden rounded-full'>
                            <img src="./images/myPictureH.jpg" alt='' className='w-full h-full object-cover' />
                        </div>
                        <div className='w-48 h-48 overflow-y-hidden rounded-full'>
                            <img src="./images/myPictureE.jpg" alt='' className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className="text-center mt-6 ">
                        <h2 className="text-3xl font-bold text-yellow-400 mb-6">About us😜</h2>
                        <ul className=" text-white text-xl flex space-x-6 mb-24">
                            <li className='bg-gray-400/30 rounded-full'>👨‍🎓Bachelor's degree graduates in computer science.</li>
                            <li className='bg-gray-400/30 rounded-full'>👩‍💻Love to program and create new things.</li>
                            <li className='bg-gray-400/30 rounded-full'>😎Currently, serving in the IDF service.</li>
                        </ul>

                        <ul className='mt-10 bg-slate-500/30 rounded-full py-4 text-xl '>
                            <li className='text-lime-300'>For any question you can contact us by email:</li>
                            <li className='text-cyan-400 hover:scale-110'><a href="mailto:evyamadmon@gmail.com">evyamadmon@gmail.com</a></li>
                            <li className='text-cyan-400 hover:scale-110'><a href="mailto:a0526604945@gmail.com">a0526604945@gmail.com</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
