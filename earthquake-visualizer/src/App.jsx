import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Map from "./Pages/Map";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
