import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content animate-on-scroll">
          <div className="badge">Premium Healthcare</div>
          <h1>
            Compassionate Care,<br />
            <span className="text-gradient">Exceptional Results</span>
          </h1>
          <p className="hero-subtitle">
            Hi, I'm Dr. Jalaluddin Shaikh. I provide state-of-the-art medical care tailored to your unique needs, ensuring a healthier tomorrow.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <Calendar size={20} />
              Book Appointment
            </a>
            <a href="#about" className="btn btn-outline">
              Meet Dr. Shaikh
              <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="hero-stats glass-panel">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5k+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Rating (500+ Reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-on-scroll delay-200">
          <div className="image-backdrop"></div>
          <img 
            src="/doctor.png" 
            alt="Dr. Jalaluddin Shaikh" 
            className="hero-image"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1612349317150-e410f624c427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }}
          />
          
          <div className="floating-card glass-panel card-1">
            <div className="card-icon">🩺</div>
            <div>
              <strong>Specialist</strong>
              <p>Top Rated</p>
            </div>
          </div>
          
          <div className="floating-card glass-panel card-2">
            <div className="card-icon">⚡</div>
            <div>
              <strong>Available</strong>
              <p>Mon - Sat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
