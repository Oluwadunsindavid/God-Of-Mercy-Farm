import React from "react";
import bg_img from "../../assets/homepage_img.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
      className="px-6 md:px-10 lg:px-16 xl:px-40 transform transition-all relative h-[100vh] w-full flex items-center justify-center text-white"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 "></div>

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
          <button className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl px-8 py-4 text-lg ">
            Order Now
          </button>
          <button className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg hover:shadow-xl px-8 py-4 text-lg ">
            View Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
