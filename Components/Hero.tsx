import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
// import { PiHandWavingLight } from "react-icons/pi";



const Hero = () => {
    return (
        <div className='h-[88vh]  bg-[#0f141c]  bg-cover bg-center'> {/*bg-[url(/images/bg.jpg)]*/}
            <Particle />
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                <div>
                    <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                        HI, I'M <span className='text-yellow-400'>IYNKARAN!</span>
                    </h1>
                    <TextEffect />
                </div>
                <div className='w-[400px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[400px]'>
                    <Image src="/images/me.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
