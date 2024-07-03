import React from 'react'
import countryIcon from '../../assets/common/country-icon.png'
import { Icons } from '../../libs'
const Dropdown = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <div className="country">
                    <img src={countryIcon} alt="" />
                </div>
                <div className="name">Dutch</div>
                <div className="down_icon">
                    <Icons name={"chevron"} size={"size-5"} />
                </div>
            </div>
        </>
    )
}

export default Dropdown