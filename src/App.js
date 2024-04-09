import React from "react";
import "./styles/app.css";
import HotelCard from "./components/HotelCard.js";
import hotelImage1 from "./assets/hotel-image-1.png";
import hotelImage2 from "./assets/hotel-image-2.png";
import hotelImage3 from "./assets/hotel-image-3.png";

function App() {
  const hotels = [
    {
      name: "Iberostar Grande Salome",
      image: hotelImage1,
      description: "big old hotel",
      price: "100",
      stars: "****",
    },
    {
      name: "Aguamarina Golf Hotel",
      image: hotelImage2,
      description: "another nice hotel",
      price: "696.80",
      stars: "****",
    },
    {
      name: "Las Piramidas Resort",
      image: hotelImage3,
      description: "another nice hotel",
      price: "499.99",
      stars: "***",
    },
  ];
  return (
    <div className="hotels">
      {hotels.map((hotel, index) => (
        <HotelCard
          key={index}
          name={hotel.name}
          image={hotel.image}
          description={hotel.description}
          price={hotel.price}
          stars={hotel.stars}
        />
      ))}
    </div>
  );
}

export default App;
