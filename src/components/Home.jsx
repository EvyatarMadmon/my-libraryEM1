import React from 'react';
import SearchBar from './SearchBar';

function Home() {
  return (
    <div className='relative'>
      <img
        className='top-0 left-0 w-full h-screen object-cover absolute z-0'
        src='https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-20 w-full h-full flex flex-col justify-center text-white '>
        <SearchBar className='bg-slate-400/30 rounded-full mt-20 ' />
      </div>
    </div>
  );
}

export default Home;
