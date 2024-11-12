import React from 'react'
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='footer-con'>
        <div className='footer-text'>
          <h2>RadiantSkin</h2>
          <p>Become a part of our vibrant skincare community and discover the latest tips, trends and techniques for acheiving your best skin ever</p>

          <span>Sign up to our newsletter</span>

          <div>
            <input placeholder='Enter Email Address'></input>
            <button>Subscribe</button>
          </div>
        </div>

        <div className='footer-nav'>
          <p>Company</p>
          <span>About Us</span>
          <span>Features</span>
          <span>Products</span>
          <span>Explore</span>
        </div>

        <div className='footer-address'>
           <p>Office Address</p>
           <span>123 Blossom Lane, Sunrise Valley, CA 90210, United States.</span>

           <div className='socials'>
             <p>Follow us on social media</p>

             <div className='social-con'>
              <div>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731398636/icons8-instagram-50_nmb6qg.png' alt=''></img>
              </div>

              <div>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731398636/icons8-twitter-50_sywqut.png' alt=''></img>
              </div>

              <div>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731398636/icons8-tik-tok-50_tujm1f.png' alt=''></img>
              </div>
              
              <div>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731398635/icons8-linkedin-50_pkh0a5.png' alt=''></img>
              </div>
             </div>
           </div>    
        </div>      
      </div>

      <div className='copy'>
       <p>© {currentYear} RadiantSkin</p>
      </div>
    </div>
  )
}

export default Footer