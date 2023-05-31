import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link to='/home' className="navbar-brand fs-4" style={{ marginLeft: '70px' }}>Enchanting Affairs</Link>
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ marginRight: '70px' }}>
            <li className="nav-item" style={{ marginRight: '50px' }}>
              <Link to='/home' className="nav-link active fs-4 text-white">Home</Link>
            </li>
            <li className="nav-item" style={{ marginRight: '50px' }}>
              <Link to='/about' className="nav-link custom-text fs-4 text-white">About</Link>
            </li>
            <li className="nav-item" style={{ marginRight: '50px' }}>
              <Link to='/gallery' className="nav-link custom-text fs-4 text-white">Gallery</Link>
            </li>
            <li className="nav-item" style={{ marginRight: '50px' }}>
              <Link to='/services' className="nav-link custom-text fs-4 text-white">Services</Link>
            </li>
            <li className="nav-item" style={{ marginRight: '50px' }}>
              <Link to='/contact' className="nav-link custom-text fs-4 text-white">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
