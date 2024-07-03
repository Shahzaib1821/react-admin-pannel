import React from 'react'

const ButtonsVarTwo = ({
    variant,
    text,
    type,
    handles = {

    }
}) => {
    return (
        <>
            <button type={type} className='bg-blue-300 hover:opacity-75 transition-all text-white rounded-lg p-3 outline-none'>{text}</button>
        </>
    )
}

export default ButtonsVarTwo