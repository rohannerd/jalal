import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      date: 'March 2024',
      text: 'Dr. Shaikh is incredibly attentive and knowledgeable. He took the time to listen to all my concerns and explained my treatment plan in a way I could easily understand. Highly recommend!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      date: 'February 2024',
      text: 'I have been a patient for 3 years. The level of care and professionalism is unmatched. The clinic staff is also very welcoming and the wait times are surprisingly short.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Davis',
      date: 'January 2024',
      text: 'Outstanding bedside manner. I was very anxious about my symptoms, but Dr. Shaikh was calming and reassuring. The prescribed treatment worked perfectly.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Patient Reviews</h2>
        <p className="section-subtitle">
          Don't just take my word for it. Here's what my patients have to say about their experience.
        </p>
        
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={review.id} className={`testimonial-card animate-on-scroll delay-${(index % 3) * 100}`}>
              <div className="quote-icon">
                <Quote size={40} />
              </div>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" color="#F59E0B" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="reviewer-info">
                <div className="reviewer-avatar">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4>{review.name}</h4>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
