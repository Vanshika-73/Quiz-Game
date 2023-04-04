import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Welcome from "./components/Welcome";
// import Questions from "./components/Question";
// import Select_category from "./components/Select_category";
// import { Routes, Route } from "react-router";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App>console.log("app")</App>
  </BrowserRouter>
  </React.StrictMode>
);
