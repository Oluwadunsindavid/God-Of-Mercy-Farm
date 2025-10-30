import React, { useEffect, useState } from "react";
import bg_img from "../../assets/contactUsImg.webp";

const Hero = () => {
  // CHATGPT LAZY LOADING FOR BG IMAGES FOR LOADING THE IMAGES FASTER
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bg_img;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <div
      style={{
        // CHATGPT LAZY LOADING FOR BG IMAGES FOR LOADING THE IMAGES FASTER
        backgroundImage: bgLoaded
          ? `url(${bg_img})`
          : "linear-gradient(to bottom, #14532d, #1e3a8a)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
      className="px-6 md:px-10 lg:px-16 xl:px-40 transform transition-all relative h-96 w-full flex items-center justify-center text-white"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 "></div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl mb-6 leading-tight font-bold text-white">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
          We'd love to hear from you. Reach out for orders, inquiries, or
          partnerships.
        </p>
      </div>
    </div>
  );
};

export default Hero;
