import React from 'react'
import {data} from '../../../data/data.js';
import {SquareUser,} from 'lucide-react';


function Product() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-lg tracking-wider whitespace-normal font-bold capitalize ">customers</h1>
      <div className="bg-white rounded-lg  p-2">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <span className="text-lg font-bold  capitalize ">name</span>
        <span className="hidden sm:grid text-lg font-bold  capitalize md:text-left sm:text-right">email</span>
        <span className="hidden lg:grid text-lg font-bold  capitalize ">last order</span>
        <span className="hidden md:grid text-lg font-bold  capitalize ">method</span>
        
        </div>       
        <ul className="">
          {data.map(item => <li  
          className="hover:bg-gray-100 grid  grid-cols-1 sm:grid-cols-2 items-center  md:grid-cols-3 lg:grid-cols-4 my-4 py-2 " key={item.id}>
            <div className="flex gap-2 items-center">
            <div  className="text-violet-500 bg-gray-300 p-1 text-xl rounded-lg"><SquareUser/></div>
            
              <p className="text-lg font-bold  text-slate-600">{item.name.first+ " " + item.name.last}</p>
            </div>
            <p className='text-slate-600 hidden sm:grid sm:text-right md:text-left'>{item.name.first}@gmail.com</p>
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

export default Product