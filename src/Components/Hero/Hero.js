import React from 'react'
import './Hero.css';

function Hero() {
  return (
    <div className='hero-con'>
      <div className='hero'>
        <div className='hero-left'>
         <div className='hero-text'>
          <h2>Unlock Your Skin's True Potential with RadiantSkin</h2>
          <p>At RadiantSkin, we believe that beauty begins with a healthy and glowing skin which makes us dedicated to providing you with high-quality products that nourish and enhance your skin's natural beauty.</p>   
         </div>

         <div className='marquee'>

         </div>
        </div>

       <div className='hero-right'>
        <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731230080/2148837460_u8ob16.jpg' alt='beautiful woman'></img>

       </div>
      </div>
    </div>
  )
}

export default Hero