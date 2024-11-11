import React from 'react'
import './Product.css';


function Product() {
  return (
    <div className='product'>
       <span>OUR PRODUCTS</span>
       <h2>Unlock Your Skin's True Potential with RadiantSkin</h2>

       <div className='product-con'>
        <div className='product-box'>
           <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731230085/2151307338_m28mab.jpg' alt=''></img>
           <span className='discount'> Get 20% Off</span>
           <p>GlowBoost Cleansing Gel</p>
           <span>For all skin types</span>
        </div>

        <div className='product-box'>
           <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731230076/2149879994_ltsjos.jpg' alt=''></img>
           <span className='discount'>Get 20% Off</span>
           <p>Radiance Renewal Serum</p>
           <span>For all skin types</span>
        </div>

        <div className='product-box'>
           <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731230076/2150435221_fec0mg.jpg' alt=''></img>
           <span className='discount'>Get 20% Off</span>
           <p>HydraDew Hyaluronic Acid Serum</p>
           <span>For all skin types</span>
        </div>

       </div>
    </div>
  )
}

export default Product