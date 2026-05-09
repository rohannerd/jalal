import React from 'react';
import { Award, BookOpen, HeartPulse } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content animate-on-scroll">
            <h2 className="section-title" style={{ textAlign: 'left' }}>About Dr. Shaikh</h2>
            <div className="title-underline"></div>
            
            <p className="about-text text-large">
              With over a decade of experience in internal medicine, Dr. Jalaluddin Shaikh is committed to providing comprehensive, patient-centered care.
            </p>
            <p className="about-text">
              His philosophy is simple: listen to the patient, utilize the latest medical advancements, and treat the whole person, not just the symptoms. Whether you're coming in for a routine check-up or managing a chronic condition, you can expect compassionate care tailored to your unique needs.
            </p>
            
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon"><Award size={24} /></div>
                <div>
                  <h4>Board Certified</h4>
                  <p>Highest standards of medical knowledge</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><BookOpen size={24} /></div>
                <div>
                  <h4>Continuous Learning</h4>
                  <p>Always up-to-date with medical research</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><HeartPulse size={24} /></div>
                <div>
                  <h4>Empathy First</h4>
                  <p>Taking time to truly listen to patients</p>
                </div>
              </div>
            </div>
            
            <img src="/signature.png" alt="Dr. Shaikh Signature" className="signature" onError={(e) => e.target.style.display='none'}/>
          </div>
          
          <div className="about-image-grid animate-on-scroll delay-200">
            <div className="img-box img-1">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Clinic setup" />
            </div>
            <div className="img-box img-2">
              <div className="experience-box glass-panel">
                <h3>10+</h3>
                <p>Years of Excellence</p>
              </div>
            </div>
            <div className="img-box img-3">
              <img src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Medical equipment" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
