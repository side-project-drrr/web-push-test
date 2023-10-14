import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import * as serviceWorker from "./web/serviceWorker.js";
import { subscribeUser } from "./web/subscription";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorker.register();

subscribeUser();
