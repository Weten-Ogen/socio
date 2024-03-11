import React from 'react'
import {ShoppingBag} from 'lucide-react'
import {data} from '../../../data/data.js'

function RecentOrders() {
  return (
    <div  className='p-4 md:p-8'>
        <h1 className='capitalize whitespace-normal text-lg font-bold '>recent orders</h1>
        <ul className=' bg-white rounded-lg p-4'>
           {data.map(item => <li className='flex hover:bg-gray-100 p-2 gap-2 items-center' key={item.id}>
                <div className='text-violet-500 bg-gray-300 p-2 rounded-lg'><ShoppingBag/></div>
                <div className='flex flex-col  items-start'>
                    <p className='text-lg font-bold tracking-wider'>{item.total}</p>
                    <p className='text-slate-600'>{item.name.first}</p>
                </div >
                <p className='ml-auto hidden md:flex'>{item.date}</p>
           </li>)}
        </ul>
    </div>
  )
}

export default RecentOrders