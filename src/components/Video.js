import React from 'react'
import './VideoStyles.css'
import {Link} from 'react-router-dom'
import monsteraVideo from '../assets/monstera-vid.mp4'

const Video = () => {
  return (
    <div className='monstera'>
        <video autoPlay loop muted id="video">
            <source src={monsteraVideo} type="video/mp4" />

        </video>
        
        <div className='content'>
            <h1>Monstera INC.</h1>
            <p>Plants suitable for you.</p>
        
        
            <div>
                <Link to='/plants' className='btn btn-light'>Plants</Link>
                <Link to='/contact' className='btn btn-light'>Contact Me</Link>
            </div>`
        </div>


    </div>
  )
}

export default Video