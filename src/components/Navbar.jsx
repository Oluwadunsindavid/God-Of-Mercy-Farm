import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import openImg from "../assets/menu_icon.png";
// import closeImg from "../assets/cross_icon.png";
import { IoMdClose } from "react-icons/io";
import {BiMenuAltRight} from "react-icons/bi"


const Navbar = () => {
  // Function to open and close menu
  const [visible, setVisible] = useState(false);

  // To make sure that the mobile menu closes after resizing the screen suddenly

  // ✅ Close menu automatically when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // 768px is Tailwind's md breakpoint
        setVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white flex justify-between items-center gap-4 py-4 px-6 md:px-10 lg:px-16 xl:px-40 transform transition-all z-50 shadow ">
      <Link to="/" className="text-green-600 text-2xl font-bold md:w-full">
        God of Mercy farm
      </Link>
      <ul className="md:flex justify-between w-full hidden">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm px-3 py-2 rounded-md font-medium hover:text-green-600 hover:bg-green-50 ${
              isActive ? "text-green-600 bg-green-50" : "text-black"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-sm px-3 py-2 rounded-md font-medium hover:text-green-600 hover:bg-green-50 ${
              isActive ? "text-green-600 bg-green-50" : "text-black"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `text-sm px-3 py-2 rounded-md font-medium hover:text-green-600 hover:bg-green-50 ${
              isActive ? "text-green-600 bg-green-50" : "text-black"
            }`
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            `text-sm px-3 py-2 rounded-md font-medium hover:text-green-600 hover:bg-green-50 ${
              isActive ? "text-green-600 bg-green-50" : "text-black"
            }`
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-sm px-3 py-2 rounded-md font-medium hover:text-green-600 hover:bg-green-50 ${
              isActive ? "text-green-600 bg-green-50" : "text-black"
            }`
          }
        >
          Contact
        </NavLink>
      </ul>
      {/* Hamburger / Close icon (Mobile only) To make sure that when you click the menu bar, it changes to X then onclick X, it closes the navbar and changes the icon back to the menu icon*/}
      <div
        onClick={() => setVisible((prev) => !prev)}
        className="md:hidden w-5 cursor-pointer"
      >
        {/* <img src={visible ? closeImg : openImg} alt="" /> */}
        <i>{visible ? <IoMdClose className="text-2xl hover:text-green-600 transition-all duration-100"/> :<BiMenuAltRight className="text-2xl hover:text-green-600 transition-all duration-100" />} </i>
      </div>
      {/* --------------Mobile view----------------- */}
      {/* Mobile dropdown menu */}
      <div
        className={`absolute bg-white left-0 right-0 top-[62px] shadow-md overflow-hidden transition-all duration-300 ease-in-out z-20 ${
          visible ? "max-h-96" : "max-h-0"
        }`}
      >
        <hr className="mt-2 mb-2 mx-4" />
        <div className="flex flex-col m-4 space-y-2">
          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className={({ isActive }) =>
              `text-sm px-3 py-2 rounded-md font-medium hover:text-green-600 hover:bg-green-50 ${
                isActive ? "text-green-600 bg-green-50" : "text-black"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className={({ isActive }) =>
              `text-sm px-3 py-2 rounded-md font-medium hover:text-green-600 hover:bg-green-50 ${
                isActive ? "text-green-600 bg-green-50" : "text-black"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/products"
            className={({ isActive }) =>
              `text-sm px-3 py-2 rounded-md font-medium hover:text-green-600 hover:bg-green-50 ${
                isActive ? "text-green-600 bg-green-50" : "text-black"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/gallery"
            className={({ isActive }) =>
              `text-sm px-3 py-2 rounded-md font-medium hover:text-green-600 hover:bg-green-50 ${
                isActive ? "text-green-600 bg-green-50" : "text-black"
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className={({ isActive }) =>
              `text-sm px-3 py-2 rounded-md font-medium hover:text-green-600 hover:bg-green-50 ${
                isActive ? "text-green-600 bg-green-50" : "text-black"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
