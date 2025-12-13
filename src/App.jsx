// import { useEffect, useState } from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Homepage from "../src/pages/Homepage.jsx";
// import AboutPage from "./pages/Aboutpage.jsx";
// import Contactpage from "./pages/Contactpage.jsx";
// import Gallerypage from "./pages/Gallerypage.jsx";
// import Navbar from "./components/Navbar.jsx";
// import Productspage from "./pages/Productspage.jsx";
// import Footer from "./components/Footer.jsx";
// import ScrollToTop from "./components/ScrollToTop.jsx";
// import BackToTopButton from "./components/BackToTopBtn.jsx";
// import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
// import LogoLoaderAlt from "./components/Loader/LogoLoaderAlt.jsx";

// // for heavy page, loader will work for there
// const HEAVY_ROUTES = ["/", "/products"];

// function App() {
//   const location = useLocation();
//   // for the Loader
//   const [loading, setLoading] = useState(true);
//     const [fadeOut, setFadeOut] = useState(false);

//   useEffect(() => {
//     // Simulate loading time
//     const timer = setTimeout(() => setLoading(false), 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   // Route change loader
//   useEffect(() => {
//     setLoading(true);

//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 800); // route change duration (feels smooth)

//     return () => clearTimeout(timer);
//   }, [location.pathname]);

//   if (loading) {
//     return <LogoLoaderAlt />;
//   }

//   return (
//     <div>
//         <ScrollToTop />
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/about" element={<AboutPage />} />{" "}
//           <Route path="/products" element={<Productspage />} />{" "}
//           {/* <Route path="/gallery" element={<Gallerypage />} /> */}
//           <Route path="/contact" element={<Contactpage />} />
//         </Routes>
//         <BackToTopButton />
//         <WhatsAppFloat />
//         <Footer />
//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Homepage from "./pages/Homepage.jsx";
import AboutPage from "./pages/Aboutpage.jsx";
import Contactpage from "./pages/Contactpage.jsx";
import Navbar from "./components/Navbar.jsx";
import Productspage from "./pages/Productspage.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BackToTopButton from "./components/BackToTopBtn.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import LogoLoaderAlt from "./components/Loader/LogoLoaderAlt.jsx";

const HEAVY_ROUTES = ["/", "/products"];

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  /* 🔹 Initial load (always show) */
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 400);
    }, 1500); // shorter & professional

    return () => clearTimeout(timer);
  }, []);

  /* 🔹 Route change loader (smart) */
  useEffect(() => {
    const isHeavyPage = HEAVY_ROUTES.includes(location.pathname);

    if (!isHeavyPage) return;

    setFadeOut(false);
    setLoading(true);

    const minDelay = 400; // skip ultra-fast navigations
    const start = performance.now();

    const timer = setTimeout(() => {
      const elapsed = performance.now() - start;

      if (elapsed >= minDelay) {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 400);
      } else {
        setLoading(false);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className={`loader-fade ${fadeOut ? "hidden" : ""}`}>
        <LogoLoaderAlt />
      </div>
    );
  }

  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<Productspage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>

      <BackToTopButton />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}

export default App;
