import React from "react";
import "./../styles/HotelCard.css";

const HotelCard = ({ name, location, image, price, description, rating }) => {
  return (
    <div className="hotel-card-container">
      <img src={image} alt="name" />
      <div className="hotel">
        <h2>{name}</h2>
        <p className="location">{location}</p>
        <p>
          <strong>Rating:</strong>
          <span className="stars">{rating}</span>
        </p>
        <p className="description">{description}</p>
        <div className="price-button-container">
          <button className="price-button">
            <span className="book-now">Book Now</span>
            <br />£{price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
