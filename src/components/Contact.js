import React from 'react';
import '../assets/css/contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>For inquiries, simply drop us a message and let the enchantment begin!</p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
            <div className="text">
              <h3>Address</h3>
              <p>San Antonio Cavite City,<br />Cavite, Philippines<br />4100</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
            <div className="text">
              <h3>Phone</h3>
              <p>12345678</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i class="fa-solid fa-envelope"></i></div>
            <div className="text">
              <h3>Email</h3>
              <p>enchantingAffairs@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" required />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea name="" id="" required></textarea>
              <span>Type your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
