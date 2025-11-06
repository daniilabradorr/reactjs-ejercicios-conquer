import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// (opcional) si tienes estilos globales en src/index.css
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);