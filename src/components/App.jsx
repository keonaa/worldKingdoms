import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./Countries";
import Details from "./Details";
import "../App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <h1>World Kingdoms</h1>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/countries/:cca2" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
