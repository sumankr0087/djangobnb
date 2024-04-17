import React from 'react'
import Image from 'next/image'
export default function MyReservationspage() {
    return (
        <main className='max-w-[1500px] mx-auto px-6 pb-6'>
            <div className='pt-6 pb-2'>
                <h1 className='text-2xl mt-6 mb-2'>my reservation</h1>
                <div className='p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl'>
                    <div className='col-span-1'>
                        <div className='relative overflow-hidden aspect-square rounded-xl'>
                            <Image fill className='hover:scale-110 object-cover h-full transition w-full'
                                alt="beach house"
                                src="/beachhouse.jpeg" />
                        </div>
                    </div>
                    <div className='col-span-1 md:col-span-3 space-y-2'>
                        <h2 className='mb-4 text-xl'> property name</h2>
                        <p><strong>check in date</strong>14/4/2024</p>
                        <p><strong>check out date</strong>15/4/2024</p>

                        <p><strong>number of nights:</strong>2</p>
                        <p><strong>Total price:</strong>$2024</p>
                        <div className='inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl'>
                            Go to property
                        </div>
                    </div>
                </div>
                <div className='p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl'>
                    <div className='col-span-1'>
                        <div className='relative overflow-hidden aspect-square rounded-xl'>
                            <Image fill className='hover:scale-110 object-cover h-full transition w-full'
                                alt="beach house"
                                src="/beachhouse.jpeg" />
                        </div>
                    </div>
                    <div className='col-span-1 md:col-span-3 space-y-2'>
                        <h2 className='mb-4 text-xl'> property name</h2>
                        <p><strong>check in date</strong>14/4/2024</p>
                        <p><strong>check out date</strong>15/4/2024</p>

                        <p><strong>number of nights:</strong>2</p>
                        <p><strong>Total price:</strong>$2024</p>
                        <div className='inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl'>
                            Go to property
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
