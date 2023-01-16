import React from 'react'
import Footer from '../components/Footer'
import MonsteraImage from '../components/MonsteraImage'
import Navbar from '../components/Navbar'
import AboutMeSection from '../components/AboutMe'



const AboutMe = () => {
  return (
    <div>
        <Navbar />
        <MonsteraImage heading="ABOUT ME" text="Let me be your expert." />
        <AboutMeSection />
        <Footer />
    </div>
  )
}

export default AboutMe