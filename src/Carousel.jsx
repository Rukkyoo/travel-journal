// Carousel.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import locationLogo from "./assets/location-logo.png";

const Carousel = ({ coverImg, location, googleMapLink, title, date, description }) => {
  return (
    <div className="carousel">
      <div className="pic-box">
        <img src={coverImg} className="location-pic" alt="Location" />
        <div className="text-box">
          <div className="location">
            <img src={locationLogo} className="location-logo" alt="Location Logo" />
            <p>{location}</p>
            <a href={googleMapLink}>View on Google Maps</a>
          </div>
          <h3>{title}</h3>
          <p className="date">{date}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  coverImg: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  googleMapLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Carousel;
