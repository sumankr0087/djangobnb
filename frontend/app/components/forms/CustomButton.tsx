import React from 'react'
// interface ContactButtonProps {
//     label: string
// }

function CustomButton(props: any) {
    return (
        <div onClick={props.onClick}
            className={`w-full py-4 text-center bg-airbnb hover:bg-airbnbDark text-white rounded-xl transition cursor-pointer ${props.className}`}>
            {props.label}
        </div>
    )
}

export default CustomButton
