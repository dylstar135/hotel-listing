import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "../styles/StarRating.css";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
  }

  return <div className="stars">{stars}</div>;
};

export default StarRating;
