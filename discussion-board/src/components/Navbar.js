import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Add Font Awesome to the head if it doesn't exist
  React.useEffect(() => {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(link);
    }
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container position-relative">
          <a className="navbar-brand fw-bold" href="/">
            Abishek
          </a>

          {/* Sliding menu (right side) */}
          <div
            aria-hidden={!isOpen}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              height: '100vh',
              width: 280,
              maxWidth: '80vw',
              background: '#212529',
              color: '#fff',
              transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 300ms ease-in-out',
              zIndex: 1050,
              paddingTop: 80,
              boxShadow: isOpen ? '-8px 0 24px rgba(0,0,0,0.2)' : 'none'
            }}
            id="slideMenu"
          >
            <nav>
              <ul className="list-unstyled ps-4">
                <li className="mb-3">
                  <a href="/" className="text-white fs-5 text-decoration-none" onClick={() => setIsOpen(false)}>
                    Home
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/hero" className="text-white fs-5 text-decoration-none" onClick={() => setIsOpen(false)}>
                    Hero Section
                  </a>
                </li>
                <li className="mb-3">
                  <a href="/three-column" className="text-white fs-5 text-decoration-none" onClick={() => setIsOpen(false)}>
                    Three-Column Section
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Backdrop when menu is open */}
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.4)',
                zIndex: 1040
              }}
            />
          )}

          {/* Fixed hamburger on the right (always visible) */}
          <button
            className="btn btn-outline-light position-absolute end-0 me-2"
            type="button"
            onClick={toggleNavbar}
            aria-controls="slideMenu"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            style={{ top: '10px' }}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;