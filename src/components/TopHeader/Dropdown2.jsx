import React from 'react'
import name from '../../assets/common/name-placeholder.png'
import { Icons } from '../../libs'
const Dropdown2 = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <div className="country">
                    <img src={name} alt="" />
                </div>
                <div className="name">
                    <div className="company_name text-sm font-semibold">Company name</div>
                    <div className="company_name text-sm">Admin</div>
                </div>
                <div className="down_icon border border-gray-500 rounded-full">
                    <Icons name={"chevron"} size={"size-4"} />
                </div>
            </div>
        </>
    )
}

export default Dropdown2