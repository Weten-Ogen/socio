import React from 'react'
import { Link } from 'react-router-dom';


const PageNotFound = () => {
  return (
    <div 
    className='max-w-[1640px] w-full h-screen bg-black/80 relative flex justify-center mx-auto  '
    >
      <img 
      className='w-full h-screen object-cover '
      src='blackish.jpg'
      alt=''
      />
      <div 
      className='absolute rounded-md inline w-[95%] sm:max-w-lg mx-auto bg-black text-white  top-[20%] p-5'>
        <h1 
        className='text-2xl sm:text-5xl capitalize pt-5  font-bold'>Page not found.
        </h1>
        <p className='text-md text-slate-400  my-3 sm:text-3xl capitalize'>
            there is  no url that matches this path
        </p>
        <div 
        className=' text-white bg-red-600 text-center rounded-md p-3 mx-auto'
        >
          <Link to='/'>
            <button className='capitalize  text-xl cursor-pointer'>
            go back
            </button>
          </Link>
  
        </div>

      </div>
    </div>
  )
}

export default PageNotFound
