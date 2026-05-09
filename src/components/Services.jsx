import React from 'react';
import { Activity, Stethoscope, Pill, Syringe, ClipboardPlus, Microscope } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope size={32} />,
      title: 'General Consultation',
      description: 'Comprehensive health check-ups and personalized medical advice for all ages.'
    },
    {
      icon: <Activity size={32} />,
      title: 'Chronic Disease Management',
      description: 'Expert care for managing diabetes, hypertension, asthma, and other chronic conditions.'
    },
    {
      icon: <ClipboardPlus size={32} />,
      title: 'Preventive Care',
      description: 'Proactive screenings, immunizations, and wellness planning to keep you healthy.'
    },
    {
      icon: <Syringe size={32} />,
      title: 'Vaccinations',
      description: 'Routine and travel vaccinations administered safely and efficiently.'
    },
    {
      icon: <Microscope size={32} />,
      title: 'Lab Testing',
      description: 'In-house diagnostic tests and coordinated external lab work for accurate results.'
    },
    {
      icon: <Pill size={32} />,
      title: 'Prescription Management',
      description: 'Careful review and management of your medications to ensure safety and efficacy.'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Medical Services</h2>
        <p className="section-subtitle">
          Offering a wide range of medical services to ensure comprehensive care for you and your family.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card animate-on-scroll delay-${(index % 3) * 100}`}
            >
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
