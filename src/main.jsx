import "@fontsource/montserrat"; // Supports weights 100-900
import "@fontsource/montserrat/500.css"; // Specifically for medium
import "@fontsource/playfair-display"; // Supports weights 400-900
import "@fontsource/playfair-display/400-italic.css"; // For italic
import "@fontsource/playfair-display/700.css"; // Specifically for bold
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />{" "}
      {/* Ensures background color and base styles are applied */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
