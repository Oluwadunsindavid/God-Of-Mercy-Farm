import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";

const AfterProductsSection = () => {
  // phone number (for easy reuse)
  const phoneNumber = "07036010547";
  const whatsappNumber = "2347036010547"; // international format without '+'

  return (
    <div
      style={{
        // CHATGPT LAZY LOADING FOR BG IMAGES FOR LOADING THE IMAGES FASTER
        backgroundImage: "linear-gradient(to right, #29c55c, #F5CC17)",
      }}
      className="py-10 px-6 md:px-10 lg:px-16 xl:px-40"
    >
      <div>
        <h1 className="text-4xl text-white font-bold text-center mb-4">
          Can't Find What You Need?
        </h1>
        <p className="text-center text-white text-xl leading-relaxed mb-16">
          Contact us directly to place your order or inquire about custom
          requirements. We're here to help with all your poultry needs.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* ✅ Call to Order Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center justify-center"
        >
          <i className="mr-3">
            <FaPhone />
          </i>
          Call to Order
        </a>

        {/* ✅ WhatsApp Us Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello!%20I%20would%20like%20to%20place%20an%20order%20or%20make%20an%20inquiry.`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center justify-center"
        >
          <i className="mr-3">
            <FaWhatsapp />
          </i>
          WhatsApp Us
        </a>
      </div>
    </div>
  );
};

export default AfterProductsSection;
