import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav 
    className='flex items-center p-4  w-full absolute justify-between  z-[100] mx-auto '>
      <h1 
      className='text-red-600 uppercase  text-4xl font-bold cursor-pointer'>netflix
      </h1>
      <div className='flex items-center text-xl text-white capitalize'>
        <Link 
        to='/sign_in'>
          <button 
          className='capitalize pr-4 outline-none'>
              sign in
          </button>
        </Link>
        <Link to='/sing_up'>
          <button 
          className='bg-red-500 py-2 capitalize rounded-md px-6' > sign up 
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
