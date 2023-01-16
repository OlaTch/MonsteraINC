import React from 'react'
import Footer from '../components/Footer'
import MonsteraImage from '../components/MonsteraImage'
import Navbar from '../components/Navbar'
import PlantsCards from '../components/Plants'


const Plants = () => {
  return (
    <div>
        <Navbar />
        <MonsteraImage heading="PLANTS" text="Take a tour." />
        <PlantsCards />
        <Footer />
    </div>
  )
}

export default Plants