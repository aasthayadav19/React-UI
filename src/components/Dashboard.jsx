import React from 'react'
import Card from './Card'
import ListingCard from './ListingCard'
import ActivityPanel from './ActivityPanel'

const Dashboard = () => {
  return (
    <div className='p-6 flex gap-6'>

      <div className='flex-1'>
      <Card/>
      
      <h2 className='text-lg font-semibold mt-6 mb-2'>
        My Listings
      </h2>


      <div className=' grid grid-cols-3 gap-6 mt-6'>
        <ListingCard/>
        <ListingCard/>
        <ListingCard/>
      </div>
    </div>

    <ActivityPanel/>
  </div>
  )
}

export default Dashboard
