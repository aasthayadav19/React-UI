import React from 'react'

const Header = () => {
    return (
        <div className="w-full h-16 bg-white flex items-center justify-between px-6">

            {/* Left */}
            <h1 className='text-xl font-semibold text-gray-800'>
                Welcome back, John
            </h1>

            {/* Right */}
            <div className="flex items-center gap-3">

               <div className='relative'>
                 <input
                    type="text"
                    placeholder="Search Dashboard"
                    className="  px-3 py-1 text-sm bg-gray-100 rounded-md outline-none "
                />
                <span className='absolute-right-2 top-12 -translate-y-1/1 text-gray-500'>
                <i className="ri-search-line"></i></span>
               </div>

                <div className="w-8 h-8 bg-green-100 flex items-center justify-center rounded-md">
                    <i className="ri-layout-grid-line"></i>
                </div>

                <div className="w-8 h-8 bg-green-100 flex items-center justify-center rounded-md">
                    <i className="ri-mail-line"></i>
                </div>

                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <i className="ri-user-line"></i>
                </div>
                
            </div>

        </div>
    )
}

export default Header
