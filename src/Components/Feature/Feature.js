import React from 'react'
import './Feature.css';

function Feature() {
  return (
    <div className='feature'>
        <div className='feat-con'>
            <div className=' feat-left'>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731230087/2149684308_vmfp82.jpg' alt=''></img>
            </div>

            <div className='feat-right'>
                <span>OUR SPECIALIZATION</span>
                <h2>Expert Advice</h2>
                <p>Not sure where to start? Our team of skincare experts is here to help. Whether you have questions about your skin type, concerns about specific ingredients, or need personalized recommendations, we're here to guide you on your journey to healthier, happier skin.</p>
                <button>Consult us today</button>
            </div>
        </div>

        <div className='feat-con' id='reverse-feat'>
            <div className=' feat-left'>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731230079/2149206702_ilj9kj.jpg' alt=''></img>
            </div>

            <div className='feat-right'>
                <span>OUR PRODUCTS</span>
                <h2>Ingredients Matter</h2>
                <p>We believe in the power of nature to transform your skin. That's why we use only the highest quality, natural ingredients in our formulations. From nourishing botanical extracts to potent antioxidants, each ingredient is chosen for its ability to promote healthy, radiant skin.</p>
                <button>Consult us today</button>
            </div>
        </div>

        <div className='feat-con'>
            <div className=' feat-left'>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731230087/2148837464_ntmra0.jpg' alt=''></img>
            </div>

            <div className='feat-right'>
                <span>ON BRAND</span>
                <h2>Cruelty-Free & Sustainable</h2>
                <p>We are committed to ethical and sustainable practices. Our products are never tested on animals, and we strive to minimize our environmental impact through eco-friendly packaging and manufacturing processes.</p>
                <button>Consult us today</button>
            </div>
        </div>
    </div>
  )
}

export default Feature