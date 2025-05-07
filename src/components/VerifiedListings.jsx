import React from 'react';
import '../styles/VerifiedListings.css';

const VerifiedListings = () => {
  return (
    <section className="verified-section">
      <div className="verified-container">
        <div className="verified-image">
          <img
            src="https://st.hzcdn.com/simgs/0d216da30aef924a_3-0920/home-design.jpg"
            alt="Kitchen interior"
          />
        </div>

        <div className="verified-content">
          <span className="trusted-badge">✔ Trusted Platform</span>
          <h2>Secure and Verified Listings</h2>
          <p>
            We verify all property listings and landlords to ensure you're
            getting accurate information and dealing with legitimate owners. Our
            platform prioritizes your safety and satisfaction.
          </p>
          <ul>
            <li>✔ Verified property owners</li>
            <li>✔ Authentic photos and descriptions</li>
            <li>✔ Transparent fee disclosures</li>
            <li>✔ Secure payment processing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VerifiedListings;
