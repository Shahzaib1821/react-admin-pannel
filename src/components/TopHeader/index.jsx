import React from 'react'
import InputFields from '../InputFields'
import Buttons from '../Buttons'
import { Icons } from '../../libs'
import Dropdown from './Dropdown'
import Dropdown2 from './Dropdown2'

const TopHeader = () => {
    return (
        <>
            <div className="bg-white flex p-3 justify-between items-center border-b border">
                <div className='relative'>
                    <span className='absolute start-2 top-3'>
                        <Icons name={"search"} size={"size-4"} />
                    </span>
                    <InputFields variant={"search"} size={"w-[400px]"} name={"Search"} type={"text"} placeholder={"Search"} />
                    <div className="absolute top-1 end-2">
                        <Buttons rounded={'rounded-full'} text={"Search"} />
                    </div>
                </div>
                <div className='flex gap-10'>
                    <Dropdown />
                    <Dropdown2 />
                </div>
            </div>

        </>
    )
}

export default TopHeader