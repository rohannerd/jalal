import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container header-content">
        <a href="#home" className="logo">
          <span className="logo-text">Dr. Jalaluddin</span> Shaikh
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary">
            <Phone size={18} />
            Book Appointment
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav glass-panel ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              className="btn btn-primary w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
