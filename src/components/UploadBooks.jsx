import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function UploadBooks() {
  const [selectedImage, setSelectedImage] = useState(null);

  function previewImage(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setSelectedImage(e.target.result); // שמירת הקובץ כבערך
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' >
        <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-white' >

          <div className='bg-sky-200/30 p-8'>
            <h2 className='text-3xl font-bold mb-4 text-center text-yellow-400'>Uploading-Books</h2>
            <form>
              <label className='block  text-white text-sm font-bold mb-2'>Book Title:</label>
              <input className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5' type='text'></input>
              <label className='block  text-white text-sm font-bold mb-2'>Book Author:</label>
              <input className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5' type='text'></input>
              <label className='block  text-white text-sm font-bold mb-2'>Book Description:</label>
              <textarea className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5' placeholder='Please enter a short description of the book ' type='text'></textarea>
              <label className='block  text-white text-sm font-bold mb-2'>Number of pages:</label>
              <input className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5' type='number' min={0}></input>
              <label className='block  text-white text-sm font-bold mb-2'>Picture of the book:</label>
              <div className='relative'>
                
                <input type="file" accept='PDF, jpg' onChange={previewImage} />
                {selectedImage && <img className='max-w-full max-h-24 object-contain'
                 src={selectedImage} alt="Preview" />}
                
              </div>

              <label className='block  text-white text-sm font-bold mb-2'>Book file:</label>
              <input className='block mb-5' type='file' accept='pdf'></input>
              <div className='flex justify-center'>
              <button className='bg-blue-500 font-extrabold center' type='submit'> <Link to ="/Home">lift me up😉 </Link></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadBooks
