import React from 'react'
import Image from 'next/image';

const Projects = () => {
    return (
        <div className='bg-[#090f18] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
            <p className='heading'>
                Pro<span className='text-yellow-400'>jects</span>
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] 
                            mx-auto items-center gap-[3rem] mt-4rem text-white pt-[3rem] '>

                <div>
                    <div className='text-center p-[1rem]'>

                        <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[400px] h-[200px] md:h-[300px]'>
                            <Image src="/images/P2.jpg" alt="Portfolio" layout='fill' className='object-contain fixed' />
                        </div>
                        <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            Marketing Website <br /> Mar 2024
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                            Created a marketing website for Flexlight. <br />
                            Used: <span className='text-decoration-line: underline'>React JS, TailWind CSS, TypeScript, <br />
                                Next JS</span>
                        </p>

                    </div>
                </div>

                <div>
                    <div className='text-center p-[1rem]'>
                        <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[400px] h-[200px] md:h-[300px]'>
                            <Image src="/images/P1.jpg" alt="Portfolio" layout='fill' className='object-contain fixed' />
                        </div>
                        <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            Portfolio <br /> Feb 2024
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                            Created my website Portfolio. <br />
                            Used: <span className='text-decoration-line: underline'>React JS, TailWind CSS, TypeScript, <br />
                                Next JS</span>
                        </p>
                    </div>
                </div>

                <div>
                    <div className='text-center p-[1rem]'>

                        <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[400px] h-[200px] md:h-[300px]'>
                            <Image src="/images/P2.jpg" alt="Portfolio" layout='fill' className='object-contain fixed' />
                        </div>
                        <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            Login Page <br /> Jan 2024
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                            Created login page for Software Developement Group Project website. <br />
                            Used: <span className='text-decoration-line: underline'>React JS, CSS, JavaScript</span>
                        </p>

                    </div>
                </div>

                <div>
                    <div className='text-center p-[1rem]'>
                        <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[400px] h-[200px] md:h-[300px]'>
                            <Image src="/images/P4.jpg" alt="Portfolio" layout='fill' className='object-contain fixed' />
                        </div>
                        <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                            Home Page & Feedback Page <br /> Jul 2023
                        </h1>
                        <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                            Created Home page and Feedback page for Web Developement group Coursework, static website. <br />
                            Used: <span className='text-decoration-line: underline'>HTML, CSS, JavaScript</span>
                        </p>

                    </div>
                </div>


            </div>

        </div>

    )
}

export default Projects