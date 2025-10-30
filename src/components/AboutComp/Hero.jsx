import React from "react";
import bg_img from "../../assets/AbtHero.webp";

const Hero = () => {

  return (
    <div
      style={{
        backgroundImage: `url(${bg_img})`,
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
          About Our Farm
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
          Discover the story behind Nigeria's most trusted poultry farm
        </p>
      </div>
    </div>
  );
};

export default Hero;
