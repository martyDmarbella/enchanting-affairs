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
              {[
                { image: wedGallery, alt: 'wedding' },
                { image: kidsParty, alt: 'kidsParty' },
                { image: adultParty, alt: 'adultParty' },
                { image: conEvent, alt: 'conEvent' },
                { image: teamBuild, alt: 'corpEvent' },
                { image: foodevent, alt: 'foodevent' },
                { image: event1, alt: 'event1' },
                { image: event2, alt: 'event2' },
              ].map(({ image, alt }, index) => (
                <div className="gallery" key={index} onClick={() => openModal(image)}>
                  <div className="image-section">
                    <img src={image} alt={alt} className="gallery-image" />
                  </div>
                </div>
              ))}
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
