'use client'
import React from 'react'
import CustomButton from '../forms/CustomButton'
function ConversationDetail() {
    return (
        <div>
            <div className='max-h-[400px] overflow-auto flex flex-col space-y-4'>
                <div className='w-[80%] py-4 px-6 rounded-xl bg-gray-200' >
                    <p className='font-bold text-gray-500'>jone doe</p>
                    <p>kjsfnk olnsfosfl sdofos fos osdf </p>
                </div>
                <div className='w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200' >
                    <p className='font-bold text-gray-500'>jonessss doe</p>
                    <p>kjsfnk olnsfosfl sdofos fos osdf </p>
                </div>

            </div>
            <div className='mt-4 py-4 px-6 flex border border-l-green-300 space-x-4 rounded-xl'>
                <input
                    type='text'
                    placeholder='Type your message......'
                    className='w-full p-2 bg-gray-200 rounded-xl' />
                <CustomButton className='w-[100px]' label='send'
                    onClick={() => console.log('clicked')
                    } />
            </div>
        </div>

    )
}

export default ConversationDetail
