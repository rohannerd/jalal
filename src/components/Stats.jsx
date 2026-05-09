import React from 'react';
import { Users, Award, Stethoscope, Clock } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const stats = [
    { icon: <Clock size={36} />, number: '10+', label: 'Years Experience' },
    { icon: <Users size={36} />, number: '5000+', label: 'Patients Treated' },
    { icon: <Award size={36} />, number: '15+', label: 'Awards Won' },
    { icon: <Stethoscope size={36} />, number: '4', label: 'Specializations' }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box animate-on-scroll">
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
