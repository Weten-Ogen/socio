import React,{useState} from 'react'
import {UserAuth} from  '../context/AuthContext';
import { Link ,useNavigate} from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp} = UserAuth();
  const navigate =useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await signUp(email,password);
      navigate('/');
    }catch(e){
      console.log(e)
    }

  }


  return (
    <>
      <div className='w-full h-screen'>
          <img 
          className='hidden sm:block absolute w-full h-full object-cover'
          src='blackish.jpg'
          alt='/'
          />
          <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
          <div className='fixed w-full px-5 sm:px-24 z-50 pt-14'>
            <div className='max-w-[450px]  h-[600px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] py-16 mx-auto '>
                <h1 className='text-3xl font-bold capitalize'>sign up</h1>
                <form 
                onSubmit={handleSubmit}
                className='flex py-4 flex-col w-full'>
                <input 
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2  bg-gray-700 rounded'
                type='email' 
                placeholder='Email'
                 autoComplete='email'
                 />
                <input 
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2  bg-gray-700 rounded'
                type='password' 
                placeholder='Pasword' autoComplete='current-password'
                />
                <button 
                type='submit'
                onClick={handleSubmit}
                className='capitalize bg-red-600 py-3 my-6 rounded font-bold'>
                  sign up
                </button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p className='capitalize'>
                    <input
                    className='mr-2 ' 
                    type='checkbox'
                    />
                    remember me
                  </p>
                  <p className='capitalize'>need help?</p>
                </div>
                <div className='text-gray-600 my-3'>
                  <span>
                    Already subcribed to Neflix?
                  </span>
                  <Link
                  className='text-lg p-1 capitalize text-white'
                   to='signup'>
                    Sign In
                  </Link>
                </div>

                  
                </form>
              </div>
            </div>
            </div>
      </div>
    </>
  )
}

export default SignUp
