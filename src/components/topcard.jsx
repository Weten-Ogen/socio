import React from 'react'

function TopCard({amount,name,percentile}) {
  return (<div className='flex justify-between items-center bg-white rounded-lg p-2'>
      <div className="flex flex-col items-start">
        <p className='text-lg capitalize font-bold'>{name}</p>
        <p>{amount}</p>
      </div>
      <p className='bg-green-500 rounded-lg p-2'>{percentile}</p>
      </div>
  )
}

export default TopCard