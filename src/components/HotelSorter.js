import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAlphaDown,
  faPoundSign,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/HotelSorter.css";

const HotelSorter = ({ handleSortChange }) => {
  const [activeOption, setActiveOption] = useState("price");

  const handleClick = (sortType) => {
    setActiveOption(sortType);
    handleSortChange(sortType);
  };

  return (
    <div className="hotel-sorter-container">
      <div
        className={`sort-option ${
          activeOption === "alphabetically" ? "active" : ""
        }`}
        onClick={() => handleClick("alphabetically")}
      >
        <div className="icon">
          <FontAwesomeIcon icon={faSortAlphaDown} />
        </div>
        <div className="text">
          sort <strong>alphabetically</strong>
        </div>
      </div>
      <div
        className={`sort-option ${activeOption === "price" ? "active" : ""}`}
        onClick={() => handleClick("price")}
      >
        <div className="icon">
          <FontAwesomeIcon icon={faPoundSign} />
        </div>
        <div className="text">
          sort by <strong>price</strong>
        </div>
      </div>
      <div
        className={`sort-option ${activeOption === "rating" ? "active" : ""}`}
        onClick={() => handleClick("rating")}
      >
        <div className="icon">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="text">
          sort by <strong>rating</strong>
        </div>
      </div>
    </div>
  );
};

export default HotelSorter;
