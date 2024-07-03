import React from 'react'
import banner_img from '../../assets/Dashboard/banner-img.png'
import Styles from './Banner.module.scss'
import Buttons from '../Buttons'
const Banner = ({ size }) => {
    return (
        <>
            <div className={`flex ${size} items-center ${Styles.bg} rounded-md p-5`}>
                <div className="image">
                    <img src={banner_img} className='w-full h-full' alt="" />
                </div>
                <div className="content">
                    <div className="heading">
                        <h1 className='text-white text-2xl'>Hello! <span className={`${Styles.text_primary} font-bold underline`}>Company Name</span></h1>
                    </div>
                    <div className="para text-white text-sm">
                        some Daily random quotes which will attract users with new tips and tricks for growth of company . some Daily random quotes which will attract users with new tips and tricks for growth of company
                    </div>
                    <div className="button">
                        <Buttons rounded={"rounded-md"} text={"Read More!"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner