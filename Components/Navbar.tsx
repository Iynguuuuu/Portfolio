import { Bars3Icon } from '@heroicons/react/16/solid'
import { RiCodeSSlashFill } from "react-icons/ri";
import React from 'react';

interface Props {
    openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
    return (
        <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#090f18] shadow-md">
            <div className='flex items-center justify-between w-[90%] mx-auto h-[100%]'>
                <h1 className='flex-[0.6]  text-violet-300 text-[60px] font-bold'>
                    <RiCodeSSlashFill />
                </h1>
                <div className='nav-link'>Home</div>
                <div className='nav-link'>SKILLS</div>
                <div className='nav-link'>PROJECTS</div>
                <div className='nav-link'>SERVICES</div>
                <div className='nav-link'>CONTACT</div>

                <div onClick={openNav}>
                    <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300' />
                </div>

            </div>
        </div>
    )
}

export default Navbar
