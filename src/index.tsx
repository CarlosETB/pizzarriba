import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import "./index.css";
import "./locales";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
