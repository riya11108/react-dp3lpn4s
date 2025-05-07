import React, { useRef } from 'react';
import '../styles/WhatOurUsersSay.css';

const testimonials = [
  {
    stars: 5,
    text: 'I found my perfect apartment in just two days using this platform. The filters were so helpful in narrowing down exactly what I was looking for!',
    name: 'Sarah Johnson',
    role: 'Tenant',
    avatar:
      '	https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
  },
  {
    stars: 4,
    text: "As a landlord, I've had great success listing my properties here. The quality of tenants and the ease of use make this my go-to platform.",
    name: 'Michael Chen',
    role: 'Property Owner',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEs5D_7nt8jPh3gStaP8Qs6cIJ-yy8xWJuQ&s',
  },
  {
    stars: 5,
    text: "The student housing filter helped me find an affordable place near my campus. I've recommended this site to all my classmates!",
    name: 'Jessica Rodriguez',
    role: 'Student Renter',
    avatar:
      '	https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
  },
  {
    stars: 4,
    text: 'The virtual tours feature saved me so much time. I was able to narrow down my choices before even visiting properties.',
    name: 'David Miller',
    role: 'Tenant',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEs5D_7nt8jPh3gStaP8Qs6cIJ-yy8xWJuQ&s',
  },
];

export default function WhatOurUsersSay() {
  const containerRef = useRef(null);

  const scroll = (dir) => {
    const { current } = containerRef;
    if (!current) return;
    current.scrollBy({
      left: dir === 'left' ? -current.offsetWidth : current.offsetWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <div>
          <h2>What Our Users Say</h2>
          <p>Hear from our satisfied customers</p>
        </div>
        <div className="arrows">
          <button onClick={() => scroll('left')} aria-label="Scroll left">
            ‹
          </button>
          <button onClick={() => scroll('right')} aria-label="Scroll right">
            ›
          </button>
        </div>
      </div>

      <div className="testimonials-grid" ref={containerRef}>
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx} className={idx < t.stars ? 'filled' : ''}>
                  ★
                </span>
              ))}
            </div>
            <p className="quote">“{t.text}”</p>
            <div className="author">
              <img src={t.avatar} alt={t.name} />
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
