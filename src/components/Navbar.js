import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a href='#logo' className="navbar-brand fs-4" style={{ marginLeft: '70px' }}>Enchanting Affairs</a>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ marginRight: '70px' }}>
            <li className="nav-item" style={{ marginRight: '50px' }}>
              <a className="nav-link active fs-4 text-white" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item" style={{ marginRight: '50px' }}>
               <a className="nav-link custom-text fs-4 text-white" href="#About">About</a>
            </li>
            <li className="nav-item" style={{ marginRight: '50px' }}>
              <a className="nav-link custom-text fs-4 text-white" href="#gallery">Gallery</a>
            </li>
            <li className="nav-item" style={{ marginRight: '50px' }}>
              <a className="nav-link custom-text fs-4 text-white" href="#services">Services</a>
            </li>
            <li className="nav-item" style={{ marginRight: '50px' }}>
              <a className="nav-link custom-text fs-4 text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
