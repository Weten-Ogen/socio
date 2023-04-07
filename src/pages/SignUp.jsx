import React from 'react'

const SignUp = () => {
  return (
    <main className='relative  w-full h-screen bg-black/20 flex items-center justify-center text-center'>
      <img 
      className=''
      src='' 
      alt=''
      />
      <section 
      className='relative max-w-md h-[400px]  flex items-center justify-center' >
        <div className='absolute inset-0'>
            <form className=''>
                <h2 
                className=''
                >
                    Sign up
                </h2>
                <div>
                    <input 
                    type='email' 
                    placeholder='Email'
                    />
                    <input 
                    type='password' 
                    placeholder='password'
                    />
                </div>
                <div>
                    <button 
                    type='submit'>
                        submit
                    </button>
                </div>
            </form>
        </div>
        
      </section>
    </main>
  )
}

export default SignUp
