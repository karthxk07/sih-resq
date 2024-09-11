import React from "react";
import DroneMap from "../Components/DroneMapComponent";
import { Link } from "react-router-dom";

const App = () => {
  // Example array of GPS locations and human counts received from drone
  const droneData = [
    { gpsLocation: [12.848984, 80.149537], humanCount: 5 },
    { gpsLocation: [12.842498, 80.157391], humanCount: 2 },
    { gpsLocation: [12.843837, 80.153142], humanCount: 8 },
  ];

  return (
    <>
      <div className="absolute h-screen w-full p-10 z-0">
        <div className="rounded-2xl overflow-hidden h-full ">
          <DroneMap droneData={droneData} />
        </div>
        {/* Pass the drone data array to the DroneMap component */}
      </div>

      <div className="absolute z-50 start-0 top-0 mx-5 mt-1">
        <Link to="/">
          <span className="font-500 font-suse text-5xl font-bold">{"↜"}</span>
        </Link>
      </div>
    </>
  );
};

export default App;
