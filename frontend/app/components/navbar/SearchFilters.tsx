import React from 'react'

export default function SearchFilters() {
    return (
        <div className='h-[48px] lg:h-[64px] flex flex-row items-center justify-between border rounded-full'>
            <div className='hidden lg:block'>
                <div className='flex flex-row items-center justify-between'>
                    <div className='w-[250px] cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                        <p className='text-xs font-semibold'>where</p>
                        <p className='text-sm'>wanted location</p>
                    </div>
                    <div className='h-[48px] lg:h-[64px] cursor-pointer px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                        <p className='text-xs font-semibold'>check in</p>
                        <p className='text-sm'>add dates</p>
                    </div><div className='h-[48px] lg:h-[64px] cursor-pointer px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                        <p className='text-xs font-semibold'>check out</p>
                        <p className='text-sm'>add deats</p>
                    </div>
                    <div className='h-[48px] lg:h-[64px] cursor-pointer px-8 flex flex-col justify-center rounded-full hover:bg-gray-100'>
                        <p className='text-xs font-semibold'>who</p>
                        <p className='text-sm'>Add guests</p>
                    </div>
                </div>
            </div>
            <div className='p-2'>
                <div className='p-2 lg:p-4 bg-airbnb hover:bg-airbnbDark transition cursor-pointer rounded-full text-white'>
                    <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 4, overflow: 'visible' }}>
                        <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}