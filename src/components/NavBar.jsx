import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const NavBar = () => {
  const {user,logOut} = UserAuth()
  const handleLogOut = async () => {
    try{
      await logOut()
    }catch(e) {
      console.log(e)
    }
  }
  return (
    <nav 
    className='flex items-center p-4  w-full absolute justify-between  z-[100] mx-auto '>
      <Link to='/'>
        <h1 
        className='text-red-600 uppercase text-lg md:text-4xl font-bold cursor-pointer'>socio
        </h1>
      </Link>
      {
        user?.email ? (
          <div className='flex items-center text-md md:text-xl text-white capitalize'>
          <Link 
          to='/account'>
            <button 
            className='capitalize pr-4 outline-none'>
                account
            </button>
          </Link>
          <Link to='/'>
            <button
            onClick={handleLogOut} 
            className='bg-red-500 py-2 capitalize rounded-md px-6' > logout 
            </button>
          </Link>
        </div>
        ): (
          <div className='flex items-center text-md md:text-xl text-white capitalize'>
          <Link 
          to='/login'>
            <button 
            className='capitalize pr-4 outline-none'>
                sign in
            </button>
          </Link>
          <Link to='/signup'>
            <button 
            className='bg-red-500 py-2 capitalize rounded-md px-6' > sign up 
            </button>
          </Link>
        </div>
        )
      }
     
    </nav>
  )
}

export default NavBar
