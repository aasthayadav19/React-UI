import React from 'react'

const Card = ({ title, value}) => {

  return (
    <div  className=' bg-white p-6 rounded-xl shadow-sm flex justify-between items-center' >
      <div>
      <h2 className='text-xl font-semibold text-gray-800'>
         Create and sell products
      </h2>

      <p className='text-gray-400 text-sm mt-2'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>

      <div className='flex gap-3 mt-4'>
        <button className='bg-green-600 text-white px-4 py-z rounded-md text-sm'>
          Explore More
        </button>

        <button className='bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm'>
          Top Sellers
        </button>
      </div>
    </div>

    <div className='bg-green-100 p-4 rounded-xl w-56'>
        <p className='text-sm text-gray-700'>
           Today
        </p>

        <h3 className='font-semibold text-gray-800'>
           5 Orders
        </h3>

        <p className='text-sm text-gray-700 mt-4'>
          This Month
        </p>

        <h3 className='font-semibold text-gray-800'>
          240 Orders
        </h3>
    </div>
    </div>
  )
}

export default Card
