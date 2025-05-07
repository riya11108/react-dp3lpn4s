// src/components/FeaturedProperties.jsx
import React from 'react';
import '../styles/FeaturedProperties.css';

const properties = [
  {
    id: 1,
    title: 'Modern Apartment with City View',
    address: '123 Downtown St, New York',
    price: '$1,500',
    beds: 2,
    baths: 1,
    area: '850 sq ft',
    featured: true,
    image:
      'https://media.istockphoto.com/id/1319269543/photo/new-homes-on-a-quiet-street-in-raleigh-nc.jpg?s=612x612&w=0&k=20&c=qaRMP-xgYqFAXR9aTpiG0dtkyqPhJiTAovvxyG1AxvM=',
  },
  {
    id: 2,
    title: 'Cozy Studio Near Park',
    address: '456 Park Ave, Boston',
    price: '$950',
    beds: 1,
    baths: 1,
    area: '550 sq ft',
    featured: false,
    image:
      'https://www.adanirealty.com/-/media/project/realty/blogs/types-of-residential-properties.ashx',
  },
  {
    id: 3,
    title: 'Spacious Family Home',
    address: '789 Maple Rd, Chicago',
    price: '$2,200',
    beds: 3,
    baths: 2,
    area: '1,500 sq ft',
    featured: true,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurTsklPlfPRWuPpDBGoubEFFDQ371Ch5t2g&s',
  },
  {
    id: 4,
    title: 'Luxury Condo with Pool',
    address: '101 Ocean Dr, Miami',
    price: '$3,500',
    beds: 2,
    baths: 2,
    area: '1,200 sq ft',
    featured: false,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGH2lMmPKdz4dBc-gdk02aO3nekYNs14LHlw&s',
  },
];

const FeaturedProperties = () => {
  return (
    <section className="featured-section">
      <div className="container">
        <h2>Featured Properties</h2>
        <p>Explore our best available properties for rent</p>
        <div className="properties-grid">
          {properties.map((property) => (
            <div className="property-card" key={property.id}>
              <img src={property.image} alt={property.title} />
              <div className="property-content">
                {property.featured && <span className="badge">Featured</span>}
                <h3>{property.title}</h3>
                <p className="address">{property.address}</p>
                <p className="price">
                  <span>{property.price}</span>/month
                </p>
                <div className="details">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.area}</span>
                </div>
                <button className="details-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
