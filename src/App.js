import React, { useState } from "react";
import "./styles/app.css";

import HotelCard from "./components/HotelCard.js";
import HotelSorter from "./components/HotelSorter.js";

import hotelImage1 from "./assets/hotel-image-1.png";
import hotelImage2 from "./assets/hotel-image-2.png";
import hotelImage3 from "./assets/hotel-image-3.png";

function App() {
  const hotels = [
    {
      name: "Iberostar Grande Salome",
      location: "Costa Adeje, Tenerife",
      image: hotelImage1,
      description: "lorem",
      price: "1,136.50",
      rating: 5,
      bookingInfo: "Booking details for Iberostar Grande Salome",
    },
    {
      name: "Aguamarina Golf Hotel",
      location: "Costa Adeje, Tenerife",
      image: hotelImage2,
      description: "",
      price: "696.80",
      rating: 4,
      bookingInfo: "Booking details for Aguamarina Golf Hotel",
    },
    {
      name: "Las Piramidas Resort",
      location: "Costa Adeje, Tenerife",
      image: hotelImage3,
      description: "",
      price: "499.99",
      rating: 3,
      bookingInfo: "Booking details for Las Piramidas Resort",
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
            rating={hotel.rating}
            bookingInfo={hotel.bookingInfo} // Pass the bookingInfo prop
          />
        ))}
      </div>
    </div>
  );
}

export default App;
