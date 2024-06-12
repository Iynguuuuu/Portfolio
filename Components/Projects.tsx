import React from 'react'
import Image from 'next/image';
import { IoLogoGithub } from "react-icons/io";
import { IoGlobeOutline } from "react-icons/io5";

const Projects = () => {
    return (

        <section id='Project'>

            <div className='bg-[#090f18] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
                <p className='heading'>
                    Pro<span className='text-yellow-400'>jects</span>
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] 
                            mx-auto items-center gap-[3rem] mt-4rem text-white pt-[3rem] '>

                    <div data-aos="flip-up" data-aos-delay="100">
                        <div className='text-center p-[1rem]'>

                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/P3.jpg" alt="Portfolio" layout='fill' className='object-contain fixed' />
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                                Marketing Website <br /> 
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                                Created a marketing website for Flexlight. <br />
                                Used: <span className='text-decoration-line: underline font-bold'>React JS, TailWind CSS, TypeScript, <br />
                                    Next JS</span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[7rem]'>
                                <a href="https://github.com/Iynguuuuu/Flexlight"> <IoLogoGithub className='w-[2rem] h-[2rem] text-white ' /></a>
                                <a href="https://flexlight.vercel.app/"> <IoGlobeOutline className='w-[2rem] h-[2rem] text-white ' /></a>
                            </div>

                        </div>
                    </div>

                    <div data-aos="flip-up" data-aos-delay="300">
                        <div className='text-center p-[1rem]'>

                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/todo.jpg" alt="Portfolio" layout='fill' className='object-contain fixed' />
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                                My Task <br /> 
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                                Implemented My daily tasks planner web application. JWT authentication | CRUD To-Dos <br />
                                Used: <span className='text-decoration-line: underline font-bold'>React Js, Node with Express Js, MongoDB, (MERN) <br />
                                </span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[7rem]'>
                                <a href="https://github.com/Iynguuuuu/My_Task"> <IoLogoGithub className='w-[2rem] h-[2rem] text-white ' /></a>
                            </div>

                        </div>
                    </div>

                    <div data-aos="flip-up" data-aos-delay="500">
                        <div className='text-center p-[1rem]'>
                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/game.jpg" alt="Portfolio" layout='fill' className='object-contain fixed' />
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                                Ice Sliding Maze Game <br /> 
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                                Used the BFS algorithm to develop a shortest path finder for sliding
                                on ice maze with obstacles.
                                <br />
                                Used: <span className='text-decoration-line: underline font-bold'> Java, Algorithms (BFS) & Data Structures (LinkedList)
                                </span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[7rem]'>
                                <a href="https://github.com/Iynguuuuu/Ice_maze"> <IoLogoGithub className='w-[2rem] h-[2rem] text-white ' /></a>

                            </div>

                        </div>
                    </div>

                    <div data-aos="flip-up" data-aos-delay="700">
                        <div className='text-center p-[1rem]'>
                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/Port.jpg" alt="Portfolio" layout='fill' className='object-contain fixed' />
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                                Portfolio <br /> 
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                                Created my Portfolio website . <br />
                                Used: <span className='text-decoration-line: underline font-bold'>React JS, TailWind CSS, TypeScript, <br />
                                    Next JS</span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[7rem]'>
                                <a href="https://github.com/Iynguuuuu/Portfolio"> <IoLogoGithub className='w-[2rem] h-[2rem] text-white ' /></a>
                                <a href="https://portfolio-tau-seven-70.vercel.app/"> <IoGlobeOutline className='w-[2rem] h-[2rem] text-white ' /></a>
                            </div>
                        </div>
                    </div>

                    <div data-aos="flip-up" data-aos-delay="900">
                        <div className='text-center p-[1rem]'>

                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/P2.jpg" alt="Portfolio" layout='fill' className='object-contain fixed' />
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                                Login Page <br /> 
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                                Created login page for Software Developement Group Project website. <br />
                                Used: <span className='text-decoration-line: underline font-bold'>React JS, CSS, JavaScript</span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[9rem]'>
                                <a href="https://bms-enzh.onrender.com/"> <IoGlobeOutline className='w-[2rem] h-[2rem] text-white ' /></a>
                            </div>


                        </div>
                    </div>

                    <div data-aos="flip-up" data-aos-delay="1100">
                        <div className='text-center p-[1rem]'>
                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/P4.jpg" alt="Portfolio" layout='fill' className='object-contain fixed' />
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                                Home Page & Feedback Page <br /> 
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                                Created Home page and Feedback page for Web Developement group Coursework, static website. <br />
                                Used: <span className='text-decoration-line: underline font-bold'>HTML, CSS, JavaScript</span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[7rem]'>
                                <a href="https://github.com/Iynguuuuu/Web."> <IoLogoGithub className='w-[2rem] h-[2rem] text-white ' /></a>
                                <a href="https://iynguuuuu.github.io/Web./Homepage.html"> <IoGlobeOutline className='w-[2rem] h-[2rem] text-white ' /></a>
                            </div>


                        </div>
                    </div>




                </div>

            </div>

        </section>


    )
}

export default Projects