import { CodeBracketSquareIcon } from '@heroicons/react/16/solid'
import { FaUserCircle } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import React from 'react'

const Skills1 = () => {
    return (
        <section id='Skill'>

            <div className='bg-[#090f18] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
                <p className='heading'>
                    Technical <span className='text-yellow-400'>Skills</span>
                </p>
                <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 w-[80%] 
                            mx-auto items-center gap-[3rem] mt-4rem text-white pt-[3rem] '>
                    <div data-aos="fade-right">
                        <div className='bg-[#16243e] hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                            <FaHtml5 className='w-[4rem] h-[4.5rem] mx-auto text-orange-500' />
                            <h1 className='text-[20px] mt:text-[30px] mt-[0.5rem] mb-[0.5rem] mx-auto'>
                                HTML
                            </h1>


                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="100">
                        <div className='bg-[#16243e]  hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                            <FaCss3Alt className='w-[4rem] h-[4.5rem] mx-auto text-blue-500' />
                            <h1 className='text-[20px] mt:text-[30px] mt-[0.5rem] mb-[0.5rem] mx-auto'>
                                CSS
                            </h1>

                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="200">
                        <div className='bg-[#16243e]  hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                            <IoLogoJavascript className='w-[4rem] h-[4.5rem] mx-auto text-yellow-400' />
                            <h1 className='text-[20px] mt:text-[30px] mt-[0.5rem] mb-[0.5rem] capitalize'>
                                JavaScript
                            </h1>

                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="300">
                        <div className='bg-[#16243e] hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                            <FaReact className='w-[4rem] h-[4.5rem] mx-auto text-cyan-400' />
                            <h1 className='text-[20px] mt:text-[30px] mt-[0.5rem] mb-[0.5rem] mx-auto capitalize'>
                                React
                            </h1>

                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-delay="400">
                        <div className='bg-[#16243e]  hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                            <FaJava className='w-[4rem] h-[4.5rem] mx-auto text-blue-800' />
                            <h1 className='text-[20px] mt:text-[30px] mt-[0.5rem] mb-[0.5rem] mx-auto capitalize'>
                               Java
                            </h1>

                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="500">
                        <div className='bg-[#16243e]  hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                            <FaNodeJs className='w-[4rem] h-[4.5rem] mx-auto text-green-400' />
                            <h1 className='text-[20px] mt:text-[30px] mt-[0.5rem] mb-[0.5rem] mx-auto capitalize'>
                               Node JS
                            </h1>

                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="600">
                        <div className='bg-[#16243e]  hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                            <SiMongodb className='w-[4rem] h-[4.5rem] mx-auto text-green-400' />
                            <h1 className='text-[20px] mt:text-[30px] mt-[0.5rem] mb-[0.5rem] mx-auto capitalize'>
                                MongoDB
                            </h1>


                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="700">
                        <div className='bg-[#16243e]  hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                            <SiTailwindcss className='w-[4rem] h-[4.5rem] mx-auto text-blue-500' />
                            <h1 className='text-[20px] mt:text-[30px] mt-[0.5rem] mb-[0.5rem] mx-auto capitalize'>
                                TailWind
                            </h1>

                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="800">
                        <div className='bg-[#16243e]  hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                            <SiMysql className='w-[4rem] h-[4.5rem] mx-auto text-[#3e7acf]' />
                            <h1 className='text-[20px] mt:text-[30px] mt-[0.5rem] mb-[0.5rem] mx-auto capitalize'>
                                MySQL
                            </h1>

                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="900">
                        <div className='bg-[#16243e]  hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                            <FaGitAlt className='w-[4rem] h-[4.5rem] mx-auto text-orange-700' />
                            <h1 className='text-[20px] mt:text-[30px] mt-[0.5rem] mb-[0.5rem] mx-auto capitalize'>
                                GitHub
                            </h1>

                        </div>
                    </div>

                </div>

            </div>

        </section>

    )
}

export default Skills1