import React from 'react'
import {ShoppingBag} from 'lucide-react'
import {data} from '../../../data/data.js'

function Customers() {
  return (
    <div className="p-4 md:p-8">
    <h1 className="text-lg tracking-wider whitespace-normal font-bold capitalize ">orders</h1>
    <div className="bg-white rounded-lg  p-2">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <span className="text-lg font-bold  capitalize ">order</span>
      <span className="hidden sm:grid text-lg font-bold  capitalize md:text-left sm:text-right">status</span>
      <span className="hidden lg:grid text-lg font-bold  capitalize ">last order</span>
      <span className="hidden md:grid text-lg font-bold  capitalize ">method</span>
      
      </div>       
      <ul className="">
        {data.map(item => <li  
        className="hover:bg-gray-100 grid  grid-cols-1 sm:grid-cols-2 items-center  md:grid-cols-3 lg:grid-cols-4 my-4 py-2 " key={item.id}>
          <div className="flex gap-2 items-center">
          <div  className="text-violet-500 bg-gray-300 p-1 text-xl rounded-lg"><ShoppingBag/></div>
          <div className='flex flex-col items-start'>
            <p className="text-lg font-bold  ">${item.total}</p>
          <p>{item.name.first}</p>
          </div>
          </div>
          <p className={`p-2 inline-flex font-bold  rounded-lg   ${item.status === 'On Hold' ? 'text-red-500':item.status === 'Processing'? 'text-yellow-500': 'text-green-500'}`}>{item.status}</p>
          <p className="hidden lg:grid">{item.date}</p>
          <div>
          <p className=" hidden md:grid">{item.method}</p>
          
          </div>
        </li>)}
      </ul>
    </div>
  </div>
  )
}

export default Customers