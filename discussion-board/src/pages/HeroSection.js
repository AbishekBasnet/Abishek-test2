import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
  const heroStyle = {

    backgroundImage: 'url("/r1.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const overlayStyle = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div className="hero-section" style={heroStyle}>
      <div style={overlayStyle}>
        <div className="text-center px-3" style={{ maxWidth: 900 }}>
        <h1 className="display-4 fw-bold mb-3 text-white">Highest peak of the World</h1>
        <p className="lead mb-4 text-white-50" style={{ maxWidth: 800, margin: '0 auto' }}>
         Mount Everest is the highest mountain in the world, standing at 8,849 meters (29,032 feet) above sea level.
          It’s located in the Himalayas on the border between Nepal and the Tibet Autonomous Region of China.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <button className="btn btn-light btn-lg">Get Started</button>
          <button className="btn btn-outline-light btn-lg">Learn More</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default HeroSection;