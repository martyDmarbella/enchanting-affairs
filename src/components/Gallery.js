import React, { useState } from 'react';
import Modal from 'react-modal';
import '../assets/css/gallery.css';
import wedGallery from '../assets/images/wedGallery.jpg';
import kidsParty from '../assets/images/kidsParty.jpg';
import adultParty from '../assets/images/adultParty.jpg';
import conEvent from '../assets/images/conEvent.jpg';
import teamBuild from '../assets/images/teamBuild.jpg';
import foodevent from '../assets/images/foodevent.jpg';
import event1 from '../assets/images/event1.jpg';
import event2 from '../assets/images/event2.jpg';

Modal.setAppElement('#root');

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
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
    </>
  );
}

export default Gallery;
