import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Brief from '../../Components/Brief/Brief'
import Feature from '../../Components/Feature/Feature'
import Product from '../../Components/Product/Product'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Cta from '../../Components/Cta/Cta'

function Home() {
  return (
    <div>
        <Hero />
        <Brief />
        <Feature />
        <Product />
        <Testimonial />
        <Cta />
    </div>
  )
}

export default Home