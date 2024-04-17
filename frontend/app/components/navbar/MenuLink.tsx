'use client'
import React from 'react'

function MenuLink(props: any) {
    return (
        <div onClick={props.onClick} className='px-5 py-4 hover:bg-gray-100 transition'>
            {props.label}
        </div>
    )
}

export default MenuLink
