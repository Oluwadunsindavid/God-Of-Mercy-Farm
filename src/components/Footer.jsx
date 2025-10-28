import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LuFacebook, LuTwitter, LuInstagram } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-15 px-6 md:px-10 lg:px-16 xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Link to="/" className="text-white text-2xl font-bold md:w-full">
            God of Mercy farm
          </Link>
          <p className="leading-relaxed mt-2 mb-8">
            Your trusted partner for fresh eggs, quality poultry, and premium
            feed. We are committed to providing the best products with
            exceptional service.
          </p>
          <div className="mb-6 pb4 flex gap-4">
            <Link>
              <LuFacebook className="md:text-3xl" />
            </Link>
            <Link>
              <LuTwitter className="md:text-3xl" />
            </Link>
            <Link>
              <LuInstagram className="md:text-3xl" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="flex flex-col space-y-2">
              <NavLink to="/" className="text-gray-300 hover:text-green-400 transition-colors">
                Home
              </NavLink>
              <NavLink to="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                About Us
              </NavLink>
              <NavLink to="/products" className="text-gray-300 hover:text-green-400 transition-colors">
                Products
              </NavLink>
              <NavLink to="/gallery" className="text-gray-300 hover:text-green-400 transition-colors">
                Gallery
              </NavLink>
              <NavLink to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                Contact
              </NavLink>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold my-3">Contact Info</h2>
            <div className="space-y-2 text-gray-300">
              <div className="flex gap-4 items-center justify-start">
                <FiPhone className="text-xl" />
                <p>07036010547</p>
              </div>
              <div className="flex gap-4 items-center justify-start">
                <HiOutlineMail className="text-xl" />
                <p>
                  oluwadunsindavid21
                  <br className="hidden md:block" />
                  @gmail.com
                </p>
              </div>
              <div className="flex gap-4 items-center justify-start">
                <IoLocationOutline className="text-xl" />
                <p>Ondo, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-300">
          © 2025 God of Mercy Poultry Farm. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
