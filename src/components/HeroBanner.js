import React from 'react';
import '../assets/css/herobanner.css'
import hero from '../assets/images/hero.jpg'

function HeroBanner() {
  return (
    <div className="herobanner">
      <img src={hero} className="img-fluid" alt="event" />
      <div className="content">
        <h4>Enchanting Affairs</h4>
        <p>
          Welcome to Enchanting Affairs,we understand the significance of every occasion and strive to create captivating experiences that leave a lasting impression.
        </p>
      </div>
    </div>
  );
}

export default HeroBanner;


