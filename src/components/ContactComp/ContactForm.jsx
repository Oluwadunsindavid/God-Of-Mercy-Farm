import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="py-20 px-4 md:px-10 lg:px-16 xl:px-32 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-lg">
        {/* 📨 Left side — Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Send us a Message
          </h2>
          <form className="flex flex-col gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message *
              </label>
              <textarea
                placeholder="Tell us about your inquiry, order details, or any questions you have..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
                rows="5"
                maxLength="500"
                required
              ></textarea>
              <p className="text-right text-gray-400 text-sm mt-1">0/500</p>
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="bg-green-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* 📍 Right side — Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Get in Touch
          </h2>

          {/* Farm Address */}
          <div className="bg-green-50 p-5 rounded-lg mb-5 shadow-sm">
            <div className="flex items-center mb-2 text-green-600">
              <FaMapMarkerAlt className="mr-3" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Farm Address
              </h3>
            </div>
            <p className="text-gray-600">
              After Suncity Radio Station <br />
              Ondo, Ondo State <br />
              Nigeria
            </p>
          </div>

          {/* Phone Number */}
          <div className="bg-blue-50 p-5 rounded-lg mb-5 shadow-sm">
            <div className="flex items-center mb-2 text-blue-600">
              <FaPhoneAlt className="mr-3" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Phone Number
              </h3>
            </div>
            <a
              href="tel:+2347036010547"
              className="text-blue-600 font-medium hover:underline"
            >
              +234 703 601 0547
            </a>
            <p className="text-gray-500 text-sm">Click to call</p>
          </div>

          {/* Email Address */}
          <div className="bg-yellow-50 p-5 rounded-lg mb-5 shadow-sm">
            <div className="flex items-center mb-2 text-yellow-600">
              <FaEnvelope className="mr-3" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Email Address
              </h3>
            </div>
            <a
              href="mailto:oluwadunsindavid21@gmail.com"
              className="text-yellow-700 font-medium hover:underline"
            >
              oluwadunsindavid21@gmail.com
            </a>
            <p className="text-gray-500 text-sm">Click to send email</p>
          </div>

          {/* WhatsApp Chat */}
          <div className="bg-green-50 p-5 rounded-lg shadow-sm mb-5">
            <div className="flex items-center mb-2 text-green-600">
              <FaWhatsapp className="mr-3" />
              <h3 className="font-semibold text-gray-800 text-lg">
                WhatsApp Chat
              </h3>
            </div>
            <a
              href="https://wa.me/2347036010547"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 font-medium hover:underline"
            >
              +234 703 601 0547
            </a>
            <p className="text-gray-500 text-sm">Click for instant chat</p>
          </div>
          {/* 🕒 Business Hours */}
          <div
            style={{
              // CHATGPT LAZY LOADING FOR BG IMAGES FOR LOADING THE IMAGES FASTER
              backgroundImage:
                "linear-gradient(to right, rgba(220, 252, 231, 1), rgba(254, 249, 195, 1))",
            }}
            className="bg-yellow-50 p-6 rounded-lg shadow-sm mb-8 border border-green-200"
          >
            <div className="flex items-center mb-3 text-green-600">
              <FaClock className="mr-3" />
              <h3 className="font-semibold text-gray-800 text-lg">
                Business Hours
              </h3>
            </div>
            <div className="text-gray-700">
              <p className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">7:00 AM - 6:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">8:00 AM - 4:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium text-black">Closed</span>
              </p>
            </div>
          </div>

          {/* ⚡ Need Immediate Assistance */}
          <div className="bg-green-500 text-white text-center p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">
              Need Immediate Assistance?
            </h3>
            <p className="text-white/90 mb-6">
              Call us directly or send a WhatsApp message for quick response
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="tel:+2347036010547"
                className="flex items-center gap-2 bg-white text-green-600 px-5 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition-all duration-300"
              >
                <FaPhoneAlt /> Call Now
              </a>
              <a
                href="https://wa.me/2347036010547"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full font-semibold shadow hover:bg-green-700 transition-all duration-300"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 🗺️ Find Us Section */}
      <div className="mt-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Find Us Here
        </h1>
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Farm Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4577384761184!2d4.835100274060009!3d7.092829417492838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10478c4c59db4d83%3A0x6a61f3ac3d33a6e5!2sOndo%20City%2C%20Ondo%20State!5e0!3m2!1sen!2sng!4v1698689473318!5m2!1sen!2sng"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
