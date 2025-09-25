import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Discussion Board</h5>
            <p>A modern platform for engaging discussions and community interaction.</p>
          </div>
          <div className="col-md-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white-50">Home</a></li>
              <li><a href="/hero" className="text-white-50">Hero Section</a></li>
              <li><a href="/three-column" className="text-white-50">Three-Column Section</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>Contact</h6>
            <p className="text-white-50 mb-1">Email: abishekbasent838example.com</p>
            <p className="text-white-50 mb-1">Phone: (437) 608-5193</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2025 Abishek. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;