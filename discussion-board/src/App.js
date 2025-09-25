import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Login from './pages/Login';
import VotePage from './pages/VotePage';
import HeroSection from './pages/HeroSection';
import ThreeColumnSection from './pages/ThreeColumnSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function MainPage() {
  React.useEffect(() => {
    const token = window.localStorage.getItem('authToken');
    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  const containerStyle = {
    backgroundColor: '#ffffff',
    minHeight: '100vh'
  };

  const overlay = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={overlay}>
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h1 className="text-center text-dark mb-4" style={{ wordBreak: 'break-word' }}>
            Discussion Board
          </h1>
          <div className="w-100" style={{ maxWidth: 350 }}>
            <button
              className="btn btn-primary w-100 mb-3"
              onClick={() => (window.location.href = '/register')}
            >
              Register
            </button>
            <button
              className="btn btn-outline-primary w-100 mb-3"
              onClick={() => (window.location.href = '/login')}
            >
              Login
            </button>
            <button
              className="btn btn-secondary w-100 mb-3"
              onClick={() => (window.location.href = '/')}
            >
              Cancel
            </button>
            <button
              className="btn btn-outline-primary w-100"
              onClick={() => (window.location.href = '/vote')}
            >
              Go to Vote Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageLayout() {
  const location = useLocation();
  const showNav = location.pathname === '/' || location.pathname === '/hero' || location.pathname === '/three-column';

  return (
    <div className="d-flex flex-column min-vh-100">
      {showNav && <Navbar />}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vote" element={<VotePage />} />
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/three-column" element={<ThreeColumnSection />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
      {showNav && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <PageLayout />
    </Router>
  );
}

export default App;
