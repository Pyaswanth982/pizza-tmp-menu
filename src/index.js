import React from "react";
import reactDOM from "react-dom/client";
import App from "./app.js";

const rootElement = reactDOM.createRoot(document.getElementById("root"));
rootElement.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)