import React from 'react'

const ActivityPanel = () => {
    return (
        <div className='w-72 bg-white p-4 rounded-xl shadow-sm'>

            <h2 className='font-semibold mb-4'>
                Recent Activity
            </h2>

            <div className='space-y-4'>

                {/* Activity Item 1 */}
                <div className='flex-items-center gap-3'>
                    <img
                        src="https://i.pravatar.cc/40?img=2"
                        alt="user"
                        className='w-8 h-8 rounded-full object-cover'
                    />

                    <div className='flex justify-between w-full'>
                        <div>
                            <p className='text-sm font-medium'>
                                Emma Turner
                            </p>
                            <p className='text-xs text-gray-500'>
                                Ordered a new Plant
                            </p>
                        </div>

                        <span className='text-xs text-gray-400 whitespace-nowrap'>
                            1 day  ago
                        </span>
                    </div>
                </div>

                { /* Activity Item 2 */}
                <div className='flex-items-center gap-3'>
                    <img
                        src="https://i.pravatar.cc/40?img=4"
                        alt="user"
                        className='w-8 h-8 rounded-full object-cover'
                    />

                    <div className='flex justify-between w-full'>
                        <div>
                            <p className='text-sm font-medium'>
                                Emma Turner
                            </p>
                            <p className='text-xs text-gray-500'>
                                Ordered a new Plant
                            </p>
                        </div>

                        <span className='text-xs text-gray-400 whitespace-nowrap'>
                            4 day  ago
                        </span>
                    </div>
                </div>


                { /* Activity Item 3 */}
                <div className='flex-items-center gap-3'>
                    <img
                        src="https://i.pravatar.cc/40?img=2"
                        alt="user"
                        className='w-8 h-8 rounded-full object-cover'
                    />

                    <div className='flex justify-between w-full'>
                        <div>
                            <p className='text-sm font-medium'>
                                Emma Turner
                            </p>
                            <p className='text-xs text-gray-500'>
                                Ordered a new Plant
                            </p>
                        </div>

                        <span className='text-xs text-gray-400 whitespace-nowrap'>
                            5 day  ago
                        </span>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default ActivityPanel
