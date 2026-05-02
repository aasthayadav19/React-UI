import React from 'react'

const ListingCard = () => {
  return (
    <div className='bg-white p-4 rounded-xl shadow hover:shadow-lg transition'>
       
       <div className='bg-gray-100 p-3 rounded-md flex justify-center'>
        <img 
       src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbnR8ZW58MHx8MHx8fDA%3D" 
       alt="plant" 
       className='w-32 h-32 object-contain '/>
       </div>
       
    </div>
  )
}

export default ListingCard
