// src/components/WhatsAppFloat.tsx
import { useState } from "react";

import { LuMessageCircle } from "react-icons/lu";


const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(true);

  const whatsappNumber = "2347036010547"; // Replace with your WhatsApp number
  const message = "Hello! I would like to order."; // Default message

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed flex justify-between items-center gap-3 bottom-5 right-5 z-50">
      {/* Chat popup */}
      {isOpen && (
        <div
          className="mb-3 w-72 bg-white rounded-xl shadow-lg p-4 
                    transition-transform duration-300 ease-in-out 
                    hover:scale-105"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-gray-800">
              Chat with us via WhatsApp
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-gray-600 mb-3">
            Quick support and inquiries.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg font-medium"
          >
            Open WhatsApp
          </a>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-110"
      >
        <LuMessageCircle size={28} />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
