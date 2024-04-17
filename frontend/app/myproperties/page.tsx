import React from 'react'
import PropertyList from '../components/properties/PropertyList'
export default function MyPropertiespage() {
    return (
        <main className='max-w-[1500px] mx-auto px-6 pb-6'>
            <h1 className='my-6 text-2xl'>My properties</h1>
            <PropertyList />
        </main>
    )
}