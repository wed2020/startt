import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DragandDrop from "./components/DragandDrop";

// Import Leaflet CSS
import "leaflet/dist/leaflet.css";

// Import stylesheet antd
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
