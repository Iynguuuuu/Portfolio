import React, { useState } from 'react'
import Navbar from '@/Components/Navbar'
import MobileNav from '@/Components/MobileNav';
import Hero from '@/Components/Hero';
import About from '@/Components/About';

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
          <About />
        </div>

      </div>
    </div>
  )
}

export default HomePage
