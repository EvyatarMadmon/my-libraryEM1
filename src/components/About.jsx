import React from 'react'

function About() {
    return (
        <div className='w-full h-screen'>
            <img
                className='top-0 left-0 w-full h-screen object-cover'
                src='https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='/'
            />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' >
                <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-white' >
                    <div className='w-48 h-48 overflow-y-hidden rounded-full relative'>
                        <img src="./images/myPicture.jpg" alt='' className='absolute inset-0 object-cover w-full h-full z-10' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About