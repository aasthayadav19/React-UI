import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const Layout = () => {
  return (
    <div className='flex h-screen bg-gray-100'>

        {/* Sidebar --> Left */}
        <div className='w-64 bg-white '>
            <Sidebar/>
        </div>
      
        {/* Main Screen --> Right */}
        <div className='flex-1 flex flex-col'>

            {/* Header */}
            <div >
                <Header/>
            </div>

            {/* Content */}
            <div >
                <Dashboard/>
            </div>
        </div>
    </div>
  )
}

export default Layout
