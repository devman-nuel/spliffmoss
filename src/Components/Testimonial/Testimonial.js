import React, { useState, useEffect } from 'react';
import './Testimonial.css';

function Testimonial() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Function to handle click on pagination dots or eclipse
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  // Function to handle click on eclipse to move slider forward
  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
    }, 5000); // Change interval duration as per your preference (5000ms = 5 seconds)

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures that effect runs only once, similar to componentDidMount

  return (
    <div className='testimonial'>
        <h2>Testimonials</h2>
        <p>Dont take our words for it, here's what some of our customers have to say.</p>

        <div className='slide-con'>
            <div className='slider'>
              <div className='slide-text'>
                {/* Array of slide texts */}
                {['Emily', 'Hailey', 'Keisha', 'Sandra'].map((text, index) => (
                  <div key={index} className={`slide ${index === activeSlide ? 'active' : ''}`}>
                    <p>{text}</p>
                    <span>
                      {/* Add corresponding description texts here */}
                      {index === 0 && "Unleash your creative potential and bring your vision to life with Transmoot. Dive into a world of endless possibilities as you craft captivating visuals with ease and precision."}
                      {index === 1 && "Discover the power of Transmoot and unlock new dimensions of creativity. Explore innovative tools and features designed to elevate your projects to new heights."}
                      {index === 2 && "Connect with a community of like-minded creators and collaborators. Share your work, exchange ideas, and forge meaningful connections that propel your creative journey forward."}
                      {index === 3 && "Achieve your goals and turn your dreams into reality with Transmoot. Whether you're a beginner or a seasoned pro, our platform empowers you to achieve success on your terms."}
                    </span>
                  </div>
                ))}
              </div>

              <div className='navigation'>
                <div className='pagination'>
                  {/* Map through slides and create pagination dots */}
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className={`slid ${index === activeSlide ? 'active' : ''}`}
                      onClick={() => handleSlideChange(index)}
                    />
                  ))}
                </div>

                <div className='eclipse' onClick={handleNextSlide}>
                  <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1700718884/icons8-dropdown-50_nfgubs.png' alt='' />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Testimonial