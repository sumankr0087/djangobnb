import React from 'react'
import Conversation from '../components/inbox/Conversation'

export default function Inboxpage() {
    return (
        <main className='max-w-[1500px] mx-auto px-6 pb-6'>
            <h1 className='my-6 text-2xl'>Inbox</h1>
            <Conversation />
            <Conversation />
            <Conversation />
        </main>
    )
}