import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {

    
    return (
        <div className='w-full h-screen'>
            <img
                className='top-0 left-0 w-full h-screen object-cover'
                src='https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt='/'
            />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'>
                <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-white' >
                    <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                        <p>All Inclusive</p>
                        <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
                            Welcome to Library
                        </h1>
                        <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
                            est, id consequuntur sequi ipsum vitae sit non exercitationem.
                        </p>
                        <button
                            className='bg-white text-black '><Link to="/Login"> Click me </Link>
                        </button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Hero;