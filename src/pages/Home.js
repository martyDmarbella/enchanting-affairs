import React, { useState } from 'react';
import Modal from 'react-modal';
import '../assets/css/HeroBanner.css';
import '../assets/css/about.css';
import '../assets/css/gallery.css';
import '../assets/css/contact.css';
import team from '../assets/images/team.png';
import team2 from '../assets/images/team2.png';
import hero from '../assets/images/hero.jpg';
import wedGallery from '../assets/images/wedGallery.jpg';
import kidsParty from '../assets/images/kidsParty.jpg';
import adultParty from '../assets/images/adultParty.jpg';
import conEvent from '../assets/images/conEvent.jpg';
import teamBuild from '../assets/images/teamBuild.jpg';
import foodevent from '../assets/images/foodevent.jpg';
import event1 from '../assets/images/event1.jpg';
import event2 from '../assets/images/event2.jpg';
import planning from '../assets/images/planning.jpg'
import venue from '../assets/images/venue.jpg'
import media from '../assets/images/media.jpg'
import catering from '../assets/images/catering.jpg'

Modal.setAppElement('#root');

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  function openModal(image) {
    setSelectedImage(image);
  }

  function closeModal() {
    setSelectedImage(null);
  }

  return (
    <div className='Home'>
      <div className="herobanner">
        <img src={hero} className="img-fluid" alt="event" />
        <div className="content">
          <h4 className="h6">Enchanting Affairs</h4>
          <p className="small">
            Welcome to Enchanting Affairs, we understand the significance of every occasion and strive to create captivating experiences that leave a lasting impression.
          </p>
        </div>

      </div>
      <div className="heading">
        <h1>About Us</h1>
        <p>Enchanting Affairs is an exceptional event planning company that specializes in creating unforgettable experiences.</p>
      </div>
      <section className="about-us">
        <img src={team} alt="team" />
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

      <section>
        <div className="heading">
          <h1>Gallery</h1>
        </div>
        <div className="gallery-section">
          <div className="gallery-wrap">
            <div className="gallery-images">
              <div className="gallery" onClick={() => openModal(wedGallery)}>
                <div className="image-section">
                  <img src={wedGallery} alt="wedding" className="gallery-image" />
                </div>
              </div>
              <div className="gallery" onClick={() => openModal(kidsParty)}>
                <div className="image-section">
                  <img src={kidsParty} alt="kidsParty" className="gallery-image" />
                </div>
              </div>
              <div className="gallery" onClick={() => openModal(adultParty)}>
                <div className="image-section">
                  <img src={adultParty} alt="adultParty" className="gallery-image" />
                </div>
              </div>
              <div className="gallery" onClick={() => openModal(conEvent)}>
                <div className="image-section">
                  <img src={conEvent} alt="conEvent" className="gallery-image" />
                </div>
              </div>
              <div className="gallery" onClick={() => openModal(teamBuild)}>
                <div className="image-section">
                  <img src={teamBuild} alt="corpEvent" className="gallery-image" />
                </div>
              </div>
              <div className="gallery" onClick={() => openModal(foodevent)}>
                <div className="image-section">
                  <img src={foodevent} alt="foodevent" className="gallery-image" />
                </div>
              </div>
              <div className="gallery" onClick={() => openModal(event1)}>
                <div className="image-section">
                  <img src={event1} alt="event1" className="gallery-image" />
                </div>
              </div>
              <div className="gallery" onClick={() => openModal(event2)}>
                <div className="image-section">
                  <img src={event2} alt="event2" className="gallery-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <h1 className='text-center fw-bold '>
          Our Services
        </h1>
        <div className="row mb-5" style={{ marginTop: '30px' }}>
          <div className="col-12 col-sm-6 col-md-3 m-auto">

            <div className="card shadow">
              <img src={planning} alt="" className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Planning</h3>
                <hr className="mx-auto w-75" />
                <p>
                  your go-to destination for exceptional planning services. With a passion for creating magical moments, we specialize in crafting unforgettable events that leave a lasting impression.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 m-auto">
            <div className="card shadow">
              <img src={venue} alt="" className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Venue</h3>
                <hr className="mx-auto w-75" />
                <p>
                  We find the perfect venue for their event, whether it's a small gathering or a large gala. I have a wide network of contacts in the venue industry and I can help you find the perfect venue for your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 m-auto">
            <div className="card shadow">
              <img src={media} alt="" className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Content Creation</h3>
                <hr className="mx-auto w-75" />
                <p>
                  Experience the magic of Enchanting Affairs' photographers and videographers. With an exceptional eye for detail and creativity, our team captures every precious moment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 m-auto">
            <div className="card shadow">
              <img src={catering} alt="" className="card-img-top" />
              <div className="card-body">
                <h3 className="text-center">Catering</h3>
                <hr className="mx-auto w-75" />
                <p>
                  Indulge in the culinary delights of Enchanting Affairs Event Management's catering service. Our team of culinary experts is dedicated to creating an extraordinary dining experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <footer className="bg-dark text-white text-center py-4">
        <div className='mt-3'>
          <h5>Enchanting Affairs Event Management</h5>
          <p>&copy; 2023 All rights reserved.</p>
        </div>
      </footer>

      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button className="close-modal" onClick={closeModal}>
          &times;
        </button>
        {selectedImage && (
          <img src={selectedImage} alt="selectedImage" className="modal-image" />
        )}
      </Modal>
    </div>
  );
}

export default Home;
