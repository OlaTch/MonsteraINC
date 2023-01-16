import React from 'react'
import "./AboutMeStyles.css"

import {Link} from "react-router-dom"

import MePhoto from "../assets/me-photo.png"
import BackgroundPlant from "../assets/background-plant.png"


const AboutMe = () => {
  return (
    <div className='aboutMe'>
        <div className='left'>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit consectetur feugiat feugiat elit pellentesque venenatis. Venenatis tortor aenean pretium vitae, donec. Arcu, ut aliquam dictum pellentesque amet. Ut elementum senectus augue bibendum leo arcu eget. Est pretium fames in ipsum euismod sed quis duis. Id sed sollicitudin malesuada amet libero. Fusce cras iaculis integer nec nec malesuada lectus augue eu. Tellus lectus ultrices urna potenti hendrerit mattis in pulvinar enim. Id lacus justo lobortis feugiat pharetra id ullamcorper. Vel sed risus, in eget tortor. Dignissim scelerisque in euismod sem id..</p>
                <Link to="/contact"><button className='btn'>Contact</button></Link>
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='image-stack bottom'>
                    <img src={BackgroundPlant} className="img" alt="background leaves"/>
                </div>
                <div className='image-stack top'>
                    <img src={MePhoto} className="img" alt="Aleksandra"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe