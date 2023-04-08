import React from 'react'

const SignUp = () => {
  return (
    <div className=' w-full h-screen top-0 relative bg-gradient-to-r from-black'>
      <img 
      className='w-full h-screen object-cover '
      src='blackish.jpg'
      alt=''
      />
      <div
      className='absolute w-[95%] md:w-[400px] max-h-[300px] max-w-md mx-auto gap-5 inset-0  bg-black rounded-md top-[20%]  z-10 p-10' 
      >
        <input
          className=' my-1 p-3 w-full mx-auto rounded-md outline-none '
          type='email' 
          placeholder='Email'
        />

        <input 
          className=' my-2 p-3 w-full mx-auto rounded-md outline-none '
          type='password' 
          placeholder='Password'
        />
        <div className='block sm:flex items-center  gap-2 mt-7 cursor-pointer'>
          <button 
          type='submit' 
          className='text-md md:text-xl inline-block  text-white  rounded-md w-full mx-auto capitalize my-2  p-2'
          >sign in
          </button>
          <button 
          type='submit' 
          className='inline-block p-2 w-full text-md md:text-xl bg-red-700 text-white rounded-md my-2 capitalize mx-auto '>
            sign up
          </button>
        </div>

       
      </div> 
    </div>
  )
}

export default SignUp
