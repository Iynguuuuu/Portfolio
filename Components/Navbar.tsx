import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
    openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
    return (
        <div className="w-[100%] sticky z-[10000] top-0 h-[12vh] bg-[#0f141c] shadow-md">
            <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
                <h1 className='flex-[0.6] cursor-pointer text[25px] text-white font-bold'>
                    <span className='text-yellow-400 '>SOFTWARE ENGINEERING</span> Undergraduate
                </h1>
                <div className='nav-link'>Home</div>
                <div className='nav-link'>ABOUT</div>
                <div className='nav-link'>PROJECTS</div>
                <div className='nav-link'>CONTACT</div>
                <div onClick={openNav}>
                    <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
