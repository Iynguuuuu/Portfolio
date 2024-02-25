import React, { useState } from 'react'
import Navbar from '@/Components/Navbar'
import MobileNav from '@/Components/MobileNav';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Services from '@/Components/Services';
import Skills from '@/Components/Skills';
import Projects from '@/Components/Projects';


const HomePage = () => {

  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>

        <MobileNav nav={nav} closeNav={closeNav} />

        <Navbar openNav={openNav} />

        <Hero />

        <div className='relative z-[30]'>
          {/* <About /> */}
          <Skills />
          <Projects />
          <Services />
        </div>

      </div>
    </div>
  )
}

export default HomePage
