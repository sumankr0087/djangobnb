import React from 'react'
import Image from 'next/image'


function Categories() {
    return (
        <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12'>
            <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100'>
                <Image
                    src="/cave.jpg"
                    alt="category - cave"
                    width={20}
                    height={20} />
                <span className='text-xs'>cave</span>
            </div>
            <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100'>
                <Image
                    src="/cave.jpg"
                    alt="category - cave"
                    width={20}
                    height={20} />
                <span className='text-xs'>villas</span>
            </div>
            <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100'>
                <Image
                    src="/cave.jpg"
                    alt="category - cave"
                    width={20}
                    height={20} />
                <span className='text-xs'>cabins</span>
            </div>
            <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100'>
                <Image
                    src="/cave.jpg"
                    alt="category - cave"
                    width={20}
                    height={20} />
                <span className='text-xs'>try home</span>
            </div>
            <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100'>
                <Image
                    src="/cave.jpg"
                    alt="category - cave"
                    width={20}
                    height={20} />
                <span className='text-xs'>beach</span>
            </div>
        </div>
    )
}

export default Categories
