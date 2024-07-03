import React, { useId } from 'react'

const InputFields = ({
    name,
    type,
    label,
    placeholder,
    size,
    variant,
    register,
    error

}) => {
    const id = useId()
    return (
        <>
            {
                label && (
                    <label htmlFor="">{label}</label>
                )
            }
            {
                variant === "search" && (
                    <input id={id} type={type} name={name} className={`border bg-gray-100 border-gray-500 ${size ? size : "w-full"} py-2 px-8 rounded-full focus:outline-none`} placeholder={placeholder} />
                )
            }
        </>
    )
}

export default InputFields