import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./config/translatorConfig";

// append app to dom
ReactDOM.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>,
  document.getElementById("root")
);
