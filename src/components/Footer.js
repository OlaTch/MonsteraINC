import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem'}} />
                

                    <div>
                        <p>123 Ulica Sezamkowa</p>
                        <h4>00-369 Warszawa</h4>

                    </div>

                </div>

                <div className='phone'>
                    <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem'}} />697 777 000</h4>

                </div>

                <div className='email'>
                    <p><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem'}} />contact@monsteraINC.com</p>

                </div>


            </div>

            <div className='right'>
                <h4>Monstera INC.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Vivamus magna massa, volutpat at risus ut, euismod suscipit mi.
                     Cras hendrerit convallis mi, in vehicula tortor bibendum non.
                      Phasellus mattis fringilla mi at lacinia. </p>

                <div className='social'>
                <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem'}} />
                <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem'}} />
                <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem'}} />

                </div>     
            </div>


        </div>
        

    </div>
  )
}

export default Footer