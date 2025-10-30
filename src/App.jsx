// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/Homepage.jsx";
import AboutPage from "./pages/Aboutpage.jsx";
import Contactpage from "./pages/Contactpage.jsx";
import Gallerypage from "./pages/Gallerypage.jsx";
import Navbar from "./components/Navbar.jsx";
import Productspage from "./pages/Productspage.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BackToTopButton from "./components/BackToTopBtn.jsx";

function App() {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />{" "}
        <Route path="/products" element={<Productspage />} />{" "}
        {/* <Route path="/gallery" element={<Gallerypage />} /> */}
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <BackToTopButton/>
      <Footer />
    </div>
  );
}

export default App;
