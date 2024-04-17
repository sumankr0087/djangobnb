import React from 'react'
import Image from 'next/image'
import ReservationSidebar from '@/app/components/properties/ReservationSidebar'
export default function PropertyDetailPage() {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className='mb-4 w-full h-[64vh] overflow-hidden rounded-xl relative'>
                <Image
                    fill
                    src='/beachhouse.jpeg'
                    className='object-cover w-full h-full'
                    alt="beach house" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                <div className='col-span-3 py-6 pr-6'>
                    <h1 className='mb-4 text-4xl'>property name</h1>
                    <span className='mb -6 block text-lg text-gray-600'>
                        4 guest - 2 bedrooms - 1 bathroom
                    </span>
                    <hr />
                    <div className='py-6 flex items-center space-x-4'>
                        <Image
                            src='/beachhouse.jpeg'
                            width={50}
                            height={50}
                            className='rounded-full h-[50px]'
                            alt="profile img" />
                        <p><strong>jhone doe</strong> is your home</p>
                    </div>
                    <hr />
                    <p className='mt-6 text-lg'>
                        jksnikland f ois fo sd os csoc usof soosdocsocs scosb cscjk if cs
                    </p>
                </div>
                <div>
                    <ReservationSidebar />
                </div>
            </div>
        </main>
    )
}