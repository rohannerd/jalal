import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitting: false, message: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: 'Sending request...', type: 'info' });

    try {
      const payload = {
        ...formData,
        _subject: `New Appointment Request from ${formData.name || 'a patient'}`,
        _template: "box", // This forces FormSubmit to use a clean, modern card layout
      };

      const response = await fetch("https://formsubmit.co/ajax/rohanahmed887@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ submitting: false, message: 'Appointment request sent successfully! We will contact you soon.', type: 'success' });
        setFormData({ name: '', phone: '', date: '', message: '' }); // Clear form
      } else {
        setStatus({ submitting: false, message: 'Something went wrong. Please try again.', type: 'error' });
      }
    } catch (error) {
      setStatus({ submitting: false, message: 'Failed to send request. Please check your connection.', type: 'error' });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Ready to prioritize your health? Schedule an appointment today or reach out with any questions.
        </p>
        
        <div className="contact-grid">
          <div className="contact-info animate-on-scroll">
            <div className="info-card">
              <h3>Clinic Information</h3>
              
              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <strong>Phone</strong>
                  <p><a href="tel:+919564992221">+91 9564992221</a></p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:contact@drjalaluddin.com">contact@drjalaluddin.com</a></p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <strong>Location</strong>
                  <p>123 Health Avenue, Medical District<br/>City, State 12345</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Clock size={20} /></div>
                <div>
                  <strong>Working Hours</strong>
                  <ul className="hours-list">
                    <li><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
                    <li><span>Saturday:</span> <span>10:00 AM - 2:00 PM</span></li>
                    <li><span>Sunday:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container animate-on-scroll delay-200">
            <form className="contact-form glass-panel" onSubmit={handleSubmit}>
              <h3>Book an Appointment</h3>
              <p>Fill out the form below and our team will get back to you to confirm your appointment.</p>
              
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Reason for Visit (Optional)</label>
                <textarea id="message" name="message" rows="4" placeholder="Briefly describe your symptoms or reason for visit" value={formData.message} onChange={handleChange}></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full" disabled={status.submitting}>
                {status.submitting ? 'Sending...' : 'Request Appointment'}
              </button>

              {status.message && (
                <div style={{ marginTop: '1rem', padding: '1rem', borderRadius: '8px', textAlign: 'center', backgroundColor: status.type === 'success' ? '#e6fffa' : status.type === 'error' ? '#fff5f5' : '#ebf8ff', color: status.type === 'success' ? '#276749' : status.type === 'error' ? '#c53030' : '#2b6cb0' }}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
