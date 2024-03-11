import React from 'react'
import { cn } from '../../lib/utils'
import { data } from '../../data/data'

function CustomerTable({className}) {
  return (
    <div
     className={cn('',className)}>
        <div className='w-full m-auto p-4 border  rounded-lg  bg-white  overflow-y-auto'>

        {/* headers */}
        <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between  cursor-not-allowed text-md  whitespace-normal font-bold tracking-wide capitalize'>
            <span>name</span>
            <span className='text-right sm:text-left '>email</span>
            <span className="hidden md:grid">last order</span>
            <span className='hidden sm:grid'>method</span>
        </div>
        <ul>
            {data.map((item, id) => {
                return (<li key={id} className='hover:bg-gray-100 bg-gray-50 grid-cols-2 sm:grid-cols-3 rounded-lg  my-3 p-2 md:grid-cols-4 items-center justify-between cursor-pointer'>

                    <div className='flex items-center'>
                        <div className='bg-purple-100 p-3 rounded-lg'>
                            B
                        </div>
                        <p className='pl-4 capitalize text-black'>{item.name}</p>
                    </div>

                    <p className='text-gray-600 sm:text-left text-right'>{item.email}</p>
                    
                    <p className='hidden md:flex'>{item['last order']}</p>
                    <div>
                        <p>{item.method}</p>

                    </div>
                </li>
                )
            })}
        </ul>   
        </div>
    </div>
  )
}

export default CustomerTable