import React from "react";
import DroneMap from "./DroneMap";

const App = () => {
  // Example array of GPS locations and human counts received from drone
  const droneData = [
    { gpsLocation: [51.505, -0.09], humanCount: 5 },
    { gpsLocation: [51.515, -0.1], humanCount: 2 },
    { gpsLocation: [51.52, -0.11], humanCount: 8 },
  ];

  return (
    <div>
      <h1>Drone Search Operation Map</h1>
      {/* Pass the drone data array to the DroneMap component */}
      <DroneMap droneData={droneData} />
    </div>
  );
};

export default App;
