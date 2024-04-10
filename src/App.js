import React, { useState } from "react";
import "./styles/app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import HotelCard from "./components/HotelCard.js";
import HotelSorter from "./components/HotelSorter.js";
// Remove the import statement for StarRating
import hotelImage1 from "./assets/hotel-image-1.png";
import hotelImage2 from "./assets/hotel-image-2.png";
import hotelImage3 from "./assets/hotel-image-3.png";

function App() {
  const hotels = [
    {
      name: "Iberostar Grande Salome",
      location: "Costa Adeje, Tenerife",
      image: hotelImage1,
      description: "big old hotel",
      price: "1,136.50",
      rating: 2,
    },
    {
      name: "Aguamarina Golf Hotel",
      location: "Costa Adeje, Tenerife",
      image: hotelImage2,
      description: "another nice hotel",
      price: "696.80",
      rating: 4,
    },
    {
      name: "Las Piramidas Resort",
      location: "Costa Adeje, Tenerife",
      image: hotelImage3,
      description: "another nice hotel",
      price: "499.99",
      rating: 3,
    },
  ];

  const [sortedHotels, setSortedHotels] = useState(() => {
    const sortedByPrice = [...hotels].sort(
      (a, b) =>
        parseFloat(a.price.replace(",", "")) -
        parseFloat(b.price.replace(",", ""))
    );
    return sortedByPrice;
  });

  const handleSortChange = (sortType) => {
    let sortedHotelsCopy = [...sortedHotels];

    switch (sortType) {
      case "alphabetically":
        sortedHotelsCopy.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price":
        sortedHotelsCopy.sort(
          (a, b) =>
            parseFloat(a.price.replace(",", "")) -
            parseFloat(b.price.replace(",", ""))
        );
        break;
      case "rating":
        sortedHotelsCopy.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    setSortedHotels(sortedHotelsCopy);
  };

  return (
    <div className="app-container">
      <FontAwesomeIcon icon={faStar} />
      <HotelSorter handleSortChange={handleSortChange} />
      <div className="hotels">
        {sortedHotels.map((hotel, index) => (
          <HotelCard
            key={index}
            name={hotel.name}
            location={hotel.location}
            image={hotel.image}
            description={hotel.description}
            price={hotel.price}
            rating={hotel.rating} // Directly passing 'rating' prop
          />
        ))}
      </div>
    </div>
  );
}

export default App;
