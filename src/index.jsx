import React from "react";
import App from "./App";
import "./global.css";
import {
  BrowserRouter,
  createBrowserRouter,
  HashRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import MapView from "./Views/MapView";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "map",
        element: <MapView />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <HashRouterRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/map" element={<MapView />} />
    </Routes>
  </HashRouterRouter>
);
