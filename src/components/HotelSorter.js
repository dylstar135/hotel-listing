import React, { useState } from "react";
import "../styles/HotelSorter.css";

const HotelSorter = ({ handleSortChange }) => {
  const [activeOption, setActiveOption] = useState(null);

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
        sort <strong>alphabetically</strong>
      </div>
      <div
        className={`sort-option ${activeOption === "price" ? "active" : ""}`}
        onClick={() => handleClick("price")}
      >
        sort by <strong>price</strong>
      </div>
      <div
        className={`sort-option ${activeOption === "rating" ? "active" : ""}`}
        onClick={() => handleClick("rating")}
      >
        sort by <strong>rating</strong>
      </div>
    </div>
  );
};

export default HotelSorter;
