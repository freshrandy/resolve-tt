import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Import the single App component

// We are NOT importing index.css here as we are using inline styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* Router needs to wrap the App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
