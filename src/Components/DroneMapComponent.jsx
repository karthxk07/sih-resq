// Import necessary components and hooks from React and react-leaflet
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon issues in Leaflet with Webpack
import markerIconPng from "leaflet/dist/images/marker-icon.png";

// Create a functional component to render the map with multiple markers
const DroneMap = ({ droneData }) => {
  // Set a default center for the map (e.g., first drone's location or a generic location)
  const defaultCenter =
    droneData.length > 0 ? droneData[0].gpsLocation : [51.505, -0.09];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={13}
      zoomControl={false}
      style={{ height: "100%", width: "100%" }}
    >
      {/* Add a TileLayer to load and display map tiles */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Map through the droneData array to add multiple markers */}
      {droneData.map((drone, index) => (
        <Marker
          key={index}
          position={drone.gpsLocation}
          icon={L.icon({ iconUrl: markerIconPng })}
        >
          <Popup>Number of humans detected: {drone.humanCount}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DroneMap;
