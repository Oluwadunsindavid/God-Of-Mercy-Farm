import React, { useEffect, useState } from "react";
import bg_img from "../../assets/homepage_img.webp";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  // FOR THE BUTTON BELOW TO NAVIGATE TO THE PRODUCTS pagesconst ViewProductsButton = () => {
  const navigate = useNavigate();

  // FOR LOADING THE IMAGES FASTER
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bg_img;
    img.onload = () => setBgLoaded(true);
  }, []);

  const handleClick = () => {
    navigate("/products"); // 👈 your target page route
  };

  // ✅ This function opens the user's default email app
  const handleOrderNow = () => {
    window.location.href =
      "mailto:oluwadunsindavid21@gmail.com?subject=Order%20Request&body=Hello,%20I%20would%20like%20to%20place%20an%20order.";
  };
  return (
    <div
      style={{
        backgroundImage: bgLoaded
          ? `url(${bg_img})`
          : "linear-gradient(to bottom, #14532d, #1e3a8a)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
      className="px-6 md:px-10 lg:px-16 xl:px-40 transform transition-all relative h-screen w-full flex items-center justify-center text-white"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 "></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl mb-6 leading-tight font-bold text-white">
          Fresh Quality Poultry <br />
          <span className="text-5xl md:text-6xl mb-6 leading-tight font-bold text-yellow-400">
            From Farm to Table
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
          Premium eggs, healthy chickens, and quality feed delivered fresh to
          your doorstep. Experience the difference of farm-fresh quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* ✅ Order Now triggers email */}
          <button
            onClick={handleOrderNow}
            className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl px-8 py-4 text-lg "
          >
            Order Now
          </button>
          {/* ✅ View Products navigates to products page */}
          <button
            onClick={handleClick}
            className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg hover:shadow-xl px-8 py-4 text-lg "
          >
            View Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
