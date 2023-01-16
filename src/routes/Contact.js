import React from 'react'
import Form from '../components/Form'
import Footer from '../components/Footer'

import MonsteraImage from '../components/MonsteraImage'
import Navbar from '../components/Navbar'



const Contact = () => {
  return (
    <div>
        <Navbar />
        <MonsteraImage heading="CONTACT ME" text="Let me know if you are interested in my offer." />
        <Form />
        <Footer />
        
    </div>
  )
}

export default Contact