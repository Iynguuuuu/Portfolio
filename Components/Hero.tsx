import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

// import { PiHandWavingLight } from "react-icons/pi";


const Hero = () => {
    return (
        <div className='h-[87.5vh] bg-[#090f18]   mt-[12vh]  bg-cover bg-center'> {/*bg-[url(/images/bg.jpg)]*/}
            <Particle />
            <div className='w-[90%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                <div>
                    <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                        HI, I AM <span className='text-yellow-400'>IYNKARAN!</span>
                    </h1>
                    <TextEffect />
                    <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
                        Enthusiastic and driven Software Engineering undergraduate with a passion for innovation and problem-solving.
                        Proficient in various programming languages and technologies, with a strong academic foundation in software development principles.
                        Experienced in collaborative projects and eager to contribute to innovative projects in the field.
                    </p>
                    <div className='mt-[1rem] flex items-stretch space-x-5  '>
                        <a href="https://github.com/Iynguuuuu"> <IoLogoGithub className='w-[3rem] h-[3rem] text-white ' /></a>
                        <a href="https://lk.linkedin.com/in/iynkaran-pavanantham-b54991263">
                            <FaLinkedin className='w-[3rem] h-[3rem] text-white' /></a>
                    </div>
                    <div className='mt-[2rem] flex-col space-x-6 sm:space-y-0  sm:flex sm:flex-row items-center sm:space-x-6'>
                        <a
                            href="./CV.pdf"
                            download="CV Pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] 
                                            text-[18px] font-bold uppercase bg-violet-300  text-black flex items-center space-x-2 '>
                                <p>Download CV</p>
                                <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                            </button>
                        </a>

                    </div>

                </div>
                <div className='w-[400px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[400px]'>
                    <Image src="/images/Pro9.jpg" alt="user" layout="fill" className="object-cover rounded-full 
                      outline-cyan-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
