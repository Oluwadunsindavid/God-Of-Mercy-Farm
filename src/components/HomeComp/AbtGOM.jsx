import React from "react";
import abtImg from "../../assets/abt_img.jpg" 
import { Link } from "react-router-dom";

const AbtGOM = () => {
  return (
    <div className=" py-20 bg-gray-50 px-6 md:px-10 lg:px-16 xl:px-40 transform transition-all grid grid-cols-1 gap-12 items-center md:grid-cols-2">
      <div>
        <h1 className="text-4xl text-gray-800 font-bold mb-6">
          About God of Mercy Poultry Farm
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          For over a decade, we have been Nigeria's trusted source for premium
          poultry products. Our commitment to quality, sustainability, and
          customer satisfaction has made us a leader in the agricultural
          industry.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          From our modern facilities to our experienced team, every aspect of
          our operation is designed to deliver the freshest, healthiest products
          to your table.
        </p>
        <Link
          to="/about"
          className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 text-base"
        >
          Learn More About Us
        </Link>
      </div>
      <div className="relative">
        <img
          className="rounded-lg shadow-xl object-cover object-top w-full h-96"
          src={abtImg}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AbtGOM;
