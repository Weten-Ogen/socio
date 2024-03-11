import React from 'react'

function NavBar() {
  return (
    <nav className=' flex items-center justify-between  '>
        <div className='text-lg tracking-wider  uppercase font-bold '>
            Socio
        </div>
        <button className='m-2'>log in</button>
        
    </nav>
  )
}

export default NavBar