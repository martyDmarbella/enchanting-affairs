import React from 'react';
import planning from '../assets/images/planning.jpg'
import venue from '../assets/images/venue.jpg'
import media from '../assets/images/media.jpg'
import catering from '../assets/images/catering.jpg'

function Services() {
  return (
    <>
      <div className="container-fluid">
        <h1 className='text-center fw-bold'>
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
                   Experience the magic of Enchanting Affairs' photographers and videographers. With an exceptional eye for detail and creativity, our team captures every precious moment of your event.
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
                Indulge in the culinary delights of Enchanting Affairs Event Management's catering service. Our team of culinary experts is dedicated to creating an extraordinary dining experience for your event. 
                </p>
              </div>
            </div>
            {/* card ends here */}
          </div>
          {/* col ends here */}
        </div>
      </div>
    </>
  );
}

export default Services;
