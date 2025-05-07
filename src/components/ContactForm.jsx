import React from "react";
import "../styles/ContactForm.css";



const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-card">
        <h2>📧 Get in Touch</h2>
        <p>Questions about a property? We're here to help you find your perfect home.</p>
        <form className="contact-form">
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label>Phone Number (optional)</label>
            <input type="tel" placeholder="(123) 456-7890" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell us about your property needs"></textarea>
          </div>
          <button type="submit" className="send-btn">
            ✈️ Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
