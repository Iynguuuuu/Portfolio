import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import { SiLinktree } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

// import { PiHandWavingLight } from "react-icons/pi";


const Hero = () => {
    return (
        <section id='Home' className=''>
            <div className='h-[100vh] bg-[#090f18]   mt-[8vh]  bg-cover bg-center'> {/*bg-[url(/images/bg.jpg)]*/}
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
                            <a href="https://github.com/Iynguuuuu"> <IoLogoGithub className='w-[3rem] h-[3rem] text-white hover:scale-110 transform transition-all duration-300 hover:-rotate-6 ' /></a>
                            <a href="https://lk.linkedin.com/in/iynkaran-pavanantham-b54991263"><FaLinkedin className='w-[3rem] h-[3rem] text-white hover:scale-110 transform transition-all duration-300 hover:-rotate-6 ' /></a>
                            <a href="https://linktr.ee/iynguuuuu?utm_source=linktree_profile_share&ltsid=c030f32c-1a6a-4306-b0e7-9a086ebe75ee"> <SiLinktree className='w-[3rem] h-[3rem] text-white hover:scale-110 transform transition-all duration-300 hover:-rotate-6  ' /></a>
                            <a href="https://www.instagram.com/iyng._.uuuuu?igsh=MTczamF3cm1jcm42bg%3D%3D&utm_source=qr"> <AiFillInstagram className='w-[3rem] h-[3rem] text-white hover:scale-110 transform transition-all duration-300 hover:-rotate-6 ' /></a>
                        </div>

                        <div className='mt-[2rem] flex-col space-x-6 sm:space-y-0  sm:flex sm:flex-row items-center sm:space-x-6'>
                            <a
                                href="./CV.pdf"
                                download="CV"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] 
                                            text-[18px] font-bold uppercase bg-violet-300 rounded-3xl  text-black flex items-center space-x-2 '>
                                    <p>Download CV</p>
                                    <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                                </button>
                            </a>

                        </div>

                    </div>
                    <div className='ml-[12vh] mb-[5vh]'>
                        <div className='w-[400px] hidden bg-[#090f18] relative lg:flex items-center rounded-full h-[400px]'>
                            <Image src="/images/pme.png" alt="user" layout="fill"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}

export default Hero;
