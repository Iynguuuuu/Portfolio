import React, { useState } from 'react'
import Navbar from '@/Components/Navbar'
import MobileNav from '@/Components/MobileNav';
import Hero from '@/Components/Hero';

const HomePage = () => {

  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navabr */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
        {/* Hero Section */}
        <Hero />
      </div>
    </div>
  )
}

export default HomePage
