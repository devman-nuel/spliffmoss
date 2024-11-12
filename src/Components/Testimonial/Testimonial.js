import React, { useState, useEffect } from 'react';
import './Testimonial.css';

function Testimonial() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Function to handle click on pagination dots
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  // Function to move the slider forward
  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
    }, 5000); // Adjust interval duration as needed (5000ms = 5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial">
      <h2>Testimonials</h2>
      <p>Don’t take our word for it, here’s what some of our customers have to say.</p>

      <div className="slide-con">
        <div className="slider">
          <div className="slide-text">
            {/* Array of slide texts */}
            {['Emily', 'Hailey', 'Keisha', 'Sandra'].map((name, index) => (
              <div key={index} className={`slide ${index === activeSlide ? 'active' : ''}`}>
                <p><strong>{name}</strong></p>
                <span>
                  {index === 0 && "“I've tried many skincare products, but nothing compares to these! My skin feels rejuvenated and radiant every day.”"}
                  {index === 1 && "“Since switching to this brand, my skin has become smoother and healthier. I love the natural ingredients!”"}
                  {index === 2 && "“Highly recommended! These products have transformed my skincare routine and boosted my confidence.”"}
                  {index === 3 && "“The difference in my skin is unbelievable. My complexion is clearer, and I feel more confident than ever!”"}
                </span>
              </div>
            ))}
          </div>

          <div className="navigation">
            <div className="pagination">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={`slid ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => handleSlideChange(index)}
                />
              ))}
            </div>

            <div className="eclipse" onClick={handleNextSlide}>
              <img src="https://res.cloudinary.com/dxnukbo0u/image/upload/v1700718884/icons8-dropdown-50_nfgubs.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
