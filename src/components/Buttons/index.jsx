import React from 'react'

const Buttons = ({
    variant,
    text,
    rounded,
    handles = {

    }
}) => {
    return (
        <>
            <button className={`bg-black hover:opacity-75 transition-all text-white ${rounded} py-1 px-10 outline-none`}>{text}</button>
        </>
    )
}

export default Buttons