import React from 'react'
import SideBar from '../components/SideBar'
import { TopHeader } from '../components'

const GeneralLayout = ({ children }) => {
    return (
        <>
            <div className="flex h-screen">
                {/* Side Bar */}
                <div className="sideBar">
                    <SideBar />
                </div>
                <div className="flex-grow">
                    {/* top menu */}
                    <div className="menu">
                        <TopHeader />
                    </div>
                    {/* Main Content */}
                    <div className="main">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneralLayout