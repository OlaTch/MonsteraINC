import React from 'react'
import "./PlantsStyles.css"
import {Link} from "react-router-dom"

const Plants = () => {
  return (
    <div className='plants'>
        <div className='card-container'>
            <div className='card'>
                        <div className='image-container'>
                        <img className='image' src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_hyde_mint_f0e6d601-426c-40fe-abc6-b0a1f4dce17b.jpg?v=1672212220"></img>
                        </div>
                    <h3>Monstera</h3>
                    <span classname ='bar'></span>
                    <p className='price'>25 PLN</p>
                    <p> 3 Days Delivery</p>
                    <p> Good for beginners</p>
                    

                    <Link to='/contact' className='btn'>Contact</Link>
            </div>
            <div className='card'>
                    
                        <div className='image-container'>
                        <img className='image' src="https://roslinydlabiura.pl/wp-content/uploads/2021/03/dracena.jpg"></img>
                        </div>

                    <h3>Dracena</h3>
                    <span classname ='bar'></span>
                    <p className='price'>30 PLN</p>
                    <p> 3 Days Delivery</p>
                    <p> For advanced gardners</p>
                    

                    <Link to='/contact' className='btn'>Contact</Link>
            </div>

            <div className='card'>

                        <div className='image-container'>
                        <img className='image' src="https://www.thespruce.com/thmb/JToiCM2g8ssRFBOyIvvB_G5pMDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/snake-plant-care-overview-1902772-04-d3990a1d0e1d4202a824e929abb12fc1-349b52d646f04f31962707a703b94298.jpeg"></img>
                        </div>
                    <h3>Snake Plant</h3>
                    <span classname ='bar'></span>
                    <p className='price'>50 PLN</p>
                    <p> 3 Days Delivery</p>
                    <p> Friendly to amateurs</p>
                    

                    <Link to='/contact' className='btn'>Contact</Link>
            </div>    
        </div>

    </div>
  )
}

export default Plants