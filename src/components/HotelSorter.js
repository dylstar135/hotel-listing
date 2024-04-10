import React from "react";
import "../styles/HotelSorter.css";

const HotelSorter = ({ handleSortChange }) => {
  return (
    <div className="hotel-sorter-container">
      <div
        className="sort-option"
        onClick={() => handleSortChange("alphabetically")}
      >
        Sort Alphabetically
      </div>
      <div className="sort-option" onClick={() => handleSortChange("price")}>
        Sort by Price
      </div>
      <div className="sort-option" onClick={() => handleSortChange("rating")}>
        Sort by Rating
      </div>
    </div>
  );
};

export default HotelSorter;
