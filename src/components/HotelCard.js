import React from "react";

const HotelCard = ({ name, image, price, description, rating }) => {
  return (
    <div className="hotel-card-container">
      <img src={image} alt="name" />
      <div className="hotel">
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <p>
          <strong>Price:</strong>${price}
        </p>
        <p>
          <strong>Rating:</strong>
          <span className="stars">{rating}</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
