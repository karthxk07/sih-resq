import React from "react";
import DroneMap from "../Components/DroneMapComponent";

// Define the main component to render the map
const MapView = () => {
  // Simulate GPS location and human count received from the drone
  const gpsLocation = [12.8406, 80.1534]; // Replace with actual GPS coordinates
  const humanCount = 5; // Replace with actual count from deep learning model

  return (
    <div>
      <h1>Drone Search Operation Map</h1>
      {/* Pass the GPS location and human count to the DroneMap component */}
      <DroneMap gpsLocation={gpsLocation} humanCount={humanCount} />
    </div>
  );
};

export default MapView;
