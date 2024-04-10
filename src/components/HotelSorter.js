import React from "react";
import "../styles/HotelSorter.css";

const HotelSorter = ({ handleSortChange }) => {
  return (
    <div className="hotel-sorter-container">
      <div
        className="sort-option"
        onClick={() => handleSortChange("alphabetically")}
      >
        sort alphabetically
      </div>
      <div className="sort-option" onClick={() => handleSortChange("price")}>
        sort by price
      </div>
      <div className="sort-option" onClick={() => handleSortChange("rating")}>
        sort by rating
      </div>
    </div>
  );
};

export default HotelSorter;
