import React from "react";
import "./styles/app.css";
import HotelCard from "./components/HotelCard.js";

function App() {
  return (
    <div className="hotels">
      <HotelCard
        name="Iberostar Grande Salome"
        image=""
        description="big old hotel"
        price="100"
        stars="****"
      />
    </div>
  );
}

export default App;
