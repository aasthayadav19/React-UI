import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-64  bg-white-50 flex flex-col justify-between'> 

        {/* Top Section */}
        <ul className='p-6 space-y-4'>

            <li className= 'flex items-center gap-4 text-gray-600 hover:bg-gray-100 cursor-pointer p-2 rounded-lg'>
                <i className="ri-home-line text-xl"></i>
                Dashboard
            </li>

            <li className= 'flex items-center gap-4 text-gray-600 hover:text-green-700 cursor-pointer p-2 rounded-lg'>
                <i className="ri-shopping-bag-line text-xl"></i>
                My Orders
            </li>

            <li className="flex items-center gap-4 text-gray-600 hover:text-green-700 cursor-pointer p-2 rounded-lg">
                <i className="ri-checkbox-line text-xl"></i>
                To-Do
            </li>

            <li className="flex items-center gap-4 text-gray-600 hover:text-green-700 cursor-pointer p-2 rounded-lg">
                <i className="ri-user-line text-xl"></i>
                Profile
            </li>

            <li className="flex items-center gap-4 text-gray-600 hover:text-green-700 cursor-pointer p-2 rounded-lg">
                <i className="ri-settings-line text-xl"></i>
                Settings
            </li>

        </ul>


        <div className='p-4' border-t>
          <div className='flex items-center gap-4 text-gray-600      hover:text-red-500 cursor-pointer p-3 rounded-lg'>
            <i className='ri-logout-box-line text-xl'></i>
            Logout
            </div>
        </div>    
    </div>
    
    
  )
}

export default Sidebar
