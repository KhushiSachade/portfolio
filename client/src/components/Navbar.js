import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`py-3 ${isScrolled ? 'scrolled' : ''}`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <FaCode className="me-2" style={{ color: '#6AAE9E' }} />
          <span style={{ fontWeight: '700', color: '#6AAE9E' }}>Khushi Sachade</span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="border-0"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`mx-2 ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={`mx-2 ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/experience" 
              className={`mx-2 ${isActive('/experience') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects" 
              className={`mx-2 ${isActive('/projects') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={`mx-2 ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
