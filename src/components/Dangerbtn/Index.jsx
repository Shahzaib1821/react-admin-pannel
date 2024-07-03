import React from 'react'

const Dangerbtn = ({
    variant,
    text,
    handles = {

    }
}) => {
    return (
        <>
            <button className='bg-red-500 hover:opacity-75 transition-all text-white rounded-lg p-3 outline-none'>{text}</button>
        </>
    )
}

export default Dangerbtn