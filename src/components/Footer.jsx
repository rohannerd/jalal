import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo footer-logo">
              <span className="logo-text">Dr. Jalaluddin</span> Shaikh
            </a>
            <p className="footer-desc">
              Dedicated to providing compassionate, comprehensive, and patient-centered medical care for the entire community.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Dr. Shaikh</a></li>
              <li><a href="#services">Medical Services</a></li>
              <li><a href="#testimonials">Patient Reviews</a></li>
              <li><a href="#contact">Book Appointment</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li><a href="#">General Consultation</a></li>
              <li><a href="#">Chronic Disease</a></li>
              <li><a href="#">Preventive Care</a></li>
              <li><a href="#">Vaccinations</a></li>
              <li><a href="#">Lab Testing</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dr. Jalaluddin Shaikh. All rights reserved.</p>
          <p className="made-with">
            Designed with <Heart size={14} fill="#E1306C" color="#E1306C" /> for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
