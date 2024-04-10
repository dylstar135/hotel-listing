import React, { useState } from "react";
import "./../styles/HotelCard.css";
import StarRating from "./StarRating.js";

const HotelCard = ({
  name,
  location,
  image,
  price,
  description,
  hotelDescription,
  rating, // Receiving 'rating' prop directly
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="hotel-card-container">
      <img src={image} alt={name} /> {/* Changed alt to name */}
      <div className="hotel">
        <h2>{name}</h2>
        <p className="location">{location}</p>
        <button className="toggle-button" onClick={toggleDescription}>
          {expanded
            ? "Read less about this hotel"
            : "Read more about this hotel"}
        </button>
        <div className={`description-container ${expanded ? "expanded" : ""}`}>
          <p className="description">
            {expanded ? hotelDescription : description}
          </p>
        </div>
        <StarRating rating={rating} />{" "}
        {/* Passing 'rating' prop to StarRating directly */}
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
