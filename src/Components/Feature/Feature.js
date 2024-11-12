import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import './Feature.css';

gsap.registerPlugin(CSSRulePlugin);

function Feature() {
  const imgContainerRef1 = useRef(null);
  const imgContainerRef2 = useRef(null);
  const imgContainerRef3 = useRef(null);

  useEffect(() => {
    const animateImage = (imgContainerRef) => {
      const imgContainer = imgContainerRef.current;
      const img = imgContainer.querySelector("img");
      const overlayRule = CSSRulePlugin.getRule(".img-container:after");

      // Define the timeline with smoother easing
      const tl = gsap.timeline({ paused: true });

      tl.set(img, { opacity: 0, scale: 1.3 }) // Start with a zoomed-in and hidden image
        .to(overlayRule, { width: "100%", duration: 0.8, ease: "power2.out" })
        .to(overlayRule, { width: "0%", duration: 0.8, ease: "power2.in" })
        .to(img, { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }); // Smoothly reveal image with scale animation

      // IntersectionObserver to trigger animation when in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              tl.play();
              observer.unobserve(imgContainer); // Stop observing after playing the animation once
            }
          });
        },
        { threshold: 0.6 } // Adjust threshold to trigger only when 60% of imgContainer is visible
      );

      if (imgContainer) observer.observe(imgContainer);

      // Cleanup function
      return () => observer.disconnect();
    };

    // Apply the animation to each ref
    animateImage(imgContainerRef1);
    animateImage(imgContainerRef2);
    animateImage(imgContainerRef3);
  }, []);

  return (
    <div className="feature">
      <div className="feat-con">
        <div className="feat-left">
          <div className='brief-right' ref={imgContainerRef1}>
            <div className="img-container">
              <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731230087/2149684308_vmfp82.jpg' alt='Face Model'></img>
            </div>
          </div>
        </div>

        <div className="feat-right">
          <span>OUR SPECIALIZATION</span>
          <h2>Expert Advice</h2>
          <p>
            Not sure where to start? Our team of skincare experts is here to
            help. Whether you have questions about your skin type, concerns
            about specific ingredients, or need personalized recommendations,
            we're here to guide you on your journey to healthier, happier skin.
          </p>
          <button>Consult us today</button>
        </div>
      </div>

      <div className="feat-con" id="reverse-feat">
        <div className="feat-left">
          <div className='brief-right' ref={imgContainerRef2}>
            <div className="img-container">
              <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731230079/2149206702_ilj9kj.jpg' alt='Face Model'></img>
            </div>
          </div>
        </div>

        <div className="feat-right">
          <span>OUR PRODUCTS</span>
          <h2>Ingredients Matter</h2>
          <p>
            We believe in the power of nature to transform your skin. That's
            why we use only the highest quality, natural ingredients in our
            formulations. From nourishing botanical extracts to potent
            antioxidants, each ingredient is chosen for its ability to promote
            healthy, radiant skin.
          </p>
          <button>Consult us today</button>
        </div>
      </div>

      <div className="feat-con">
        <div className="feat-left">
          <div className='brief-right' ref={imgContainerRef3}>
            <div className="img-container">
              <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1731230087/2148837464_ntmra0.jpg' alt='Face Model'></img>
            </div>
          </div>
        </div>

        <div className="feat-right">
          <span>ON BRAND</span>
          <h2>Cruelty-Free & Sustainable</h2>
          <p>
            We are committed to ethical and sustainable practices. Our products
            are never tested on animals, and we strive to minimize our
            environmental impact through eco-friendly packaging and
            manufacturing processes.
          </p>
          <button>Consult us today</button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
