'use client'
import React from 'react'
import Modal from './Modal'
import { useState } from 'react'
import useSignupModal from '@/app/hooks/useSignupModal'
import CustomButton from '../forms/CustomButton'

export default function SignupModal() {
    const signupModal = useSignupModal()
    const content = (
        <form className='space-y-4'>
            <input placeholder='Your Email' type="email" className='w-full h-[54px] border px-4 border-gray-300 rounded-xl' />
            <input placeholder='Your password' type="email" className='w-full h-[54px] border px-4 border-gray-300 rounded-xl' />
            <input placeholder='Repeat password' type="email" className='w-full h-[54px] border px-4 border-gray-300 rounded-xl' />
            <div className='p-5 bg-airbnb text-white rounded-xl opacity-80'>error message!</div>
            <CustomButton
                label="Submit"
                onClick={() => console.log('test')
                }
            />
        </form>
    )
    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign Up"
            content={content} />

    )
}
