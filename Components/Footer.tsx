import { FaLocationDot } from "react-icons/fa6";
import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import React from 'react'

const Footer = () => {
    return (

        <section id="Contact">

            <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
                <div className='grid grid-cols-1 border-b-[1px] pb-[6rem] border-gray-400 
                        lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]  '>

                    <div className='flex items-center space-x-6'>
                        <div>
                            <h1 className="text-[55px]  mt-[-5rem] font-semibold text-white">Get in touch.</h1>
                            <p className="text-[16px] w-[100%] text-white opacity-60">
                                I would be happy to further discuss my experiences with you,
                                simply shoot me an Email or message me on LinkedIn : )
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center space-x-6'>
                            <FaLocationDot className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-red-600' />
                            <div>
                                <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Address</h1>
                                <p className="text-[17px] w-[100%] text-white opacity-60">Colombo, Sri Lanka</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center space-x-6'>

                            <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-blue-600' />

                            <div>
                                <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">Email</h1>
                                <p className="text-[17px] w-[100%] text-white opacity-60">iynguuuuu2002@gmail.com </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}

export default Footer