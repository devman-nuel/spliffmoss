import React from 'react'
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='footer-con'>
        <div>
          <h2>RadiantSkin</h2>
          <p></p>

          <span>Sign up to our newsletter</span>
          <div>
            <input placeholder='Enter Email Address'></input>
            <button>Subscribe</button>
          </div>

        </div>

        <div className='footer-nav'>
          <p></p>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div>
           <p></p>
           <span></span>

           <div className='socials'>
             <p></p>

             <div className='social-con'>
              <div>
                <img src='' alt=''></img>
              </div>

              <div>
                <img src='' alt=''></img>
              </div>

              <div>
                <img src='' alt=''></img>
              </div>
              
              <div>
                <img src='' alt=''></img>
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