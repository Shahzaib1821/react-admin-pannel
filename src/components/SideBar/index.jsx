import React from 'react'
import { navItems } from '../../static/navItems'
import { Icons } from '../../libs'
import Styles from './Sidebar.module.scss'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
    return (
        <>
            <div className={`shadow-md bg-white w-[250px] h-full`}>
                <div className="menu ps-3">
                    <div className="logo pt-3 text-center text-blue-600 font-semibold text-3xl">
                        LOGO
                    </div>
                    <div className="menu_heading mt-4">
                        <span className=' font-outfit'>HBP ADMIN PORTAL </span>
                    </div>
                    <div className="menu_lists mt-10">
                        <ul className='flex gap-8 flex-col'>
                            {
                                navItems.data.map((item) => {
                                    return (
                                        <>
                                            <NavLink to={navItems.links[item]}>
                                                <li className={`${Styles.nav_items} font-semibold flex items-center cursor-pointer gap-3`}>
                                                    <Icons name={navItems.icons[item]} size={'size-6'} />  {item}
                                                    {
                                                        item === "Subscription" && (
                                                            <span className='float-right'><Icons name={"chevron"} size={"size-6"} /></span>
                                                        )
                                                    }
                                                </li>
                                            </NavLink>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SideBar