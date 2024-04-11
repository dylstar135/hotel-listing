import React, { useState } from "react";
import "./../styles/HotelCard.css";
import StarRating from "./StarRating.js";

const HotelCard = ({
  name,
  location,
  image,
  price,
  description,
  rating,
  bookingInfo,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`hotel-card-container ${expanded ? "expanded" : ""}`}>
      <div className="image-container">
        <img src={image} alt={name} />
        <button className="toggle-button" onClick={toggleDescription}>
          {expanded ? "Read less" : "Read more"} about this hotel
        </button>
      </div>
      <div className="hotel-details">
        <div className="hotel-info">
          <h3>{name}</h3>
          <p className="location">{location}</p>
          <div
            className={`description-container ${expanded ? "expanded" : ""}`}
          >
            <p className="description">{description}</p>
          </div>
          <StarRating rating={rating} />
          <div className="booking-details">
            <p></p>
            <p>{bookingInfo}</p> {/* Render booking details as text */}
          </div>
        </div>
        <div className="price-button-container">
          <button className="price-button">
            <span className="book-now">Book Now</span>
            <span className="bold-price">£{price}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
