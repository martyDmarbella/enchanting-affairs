import React from 'react';
import '../assets/css/about.css';
import team from '../assets/images/team.png';
import team2 from '../assets/images/team2.png';

function About() {
  return (
    <>
      <div className="heading">
        <h1>About Us</h1>
        <p>Enchanting Affairs is an exceptional event planning company that specializes in creating unforgettable experiences.</p>
      </div>
      <section className="about-us">
        <img src={team} alt="team"/>
        <div className="content">
          <h2>Our Team</h2>
          <p>At Enchanting Affairs, our team is comprised of highly skilled and dedicated professionals who are passionate about event planning and design. Each member brings a unique set of skills and experiences, collectively working together to create exceptional experiences for our clients. Our team includes talented event planners, designers, coordinators, and support staff, all committed to delivering the highest level of service and attention to detail. We thrive on creativity, innovation, and staying up-to-date with the latest trends and industry practices.</p>
        </div>
      </section>
      <section className="about">
        <img src={team2} alt="team2" />
        <div className="goal">
          <h2>Our Goal</h2>
          <p>At Enchanting Affairs, our goal is simple yet profound: to create extraordinary and enchanting experiences that surpass our clients' expectations. We are dedicated to crafting events that leave a lasting impression and become cherished memories for a lifetime. Our primary objective is to understand our clients' visions, desires, and aspirations for their events. We strive to bring these dreams to life, infusing our creativity and expertise to design immersive environments that transport guests into a world of enchantment.</p>
        </div>
      </section>
    </>
  );
}

export default About;
