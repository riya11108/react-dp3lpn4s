import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Find Your Perfect Rental Home</h1>
          <p>
            Browse thousands of rental properties and find your ideal home with
            just a few clicks.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Browse Properties</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        {/* ⬇️ Search bar goes directly inside overlay */}
        <div className="hero-search-box">
          <div className="search-input">
            <label>Location</label>
            <input type="text" placeholder="Where do you want to live?" />
          </div>
          <div className="search-input">
            <label>Price Range</label>
            <select>
              <option>Any price</option>
              <option>$500 - $1000</option>
              <option>$1000 - $1500</option>
            </select>
          </div>
          <div className="search-input">
            <label>Property Size</label>
            <select>
              <option>Any size</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
            </select>
          </div>
          <button className="search-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
