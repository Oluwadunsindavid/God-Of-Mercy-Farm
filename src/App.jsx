// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/Homepage.jsx";
import AboutPage from "./pages/Aboutpage.jsx"
import Contactpage from "./pages/Contactpage.jsx";
import Gallerypage from "./pages/Gallerypage.jsx";
import Navbar from "./components/Navbar.jsx";
import Productspage from "./pages/Productspage.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />{" "}
        <Route path="/products" element={<Productspage />} />{" "}
        <Route path="/gallery" element={<Gallerypage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
