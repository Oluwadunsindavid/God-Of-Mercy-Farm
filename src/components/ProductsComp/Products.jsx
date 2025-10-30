import React, { useState } from "react";
import { RiAppsLine } from "react-icons/ri";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { RiHeart2Line } from "react-icons/ri";
import { RiPlantLine } from "react-icons/ri";
import egg from "../../assets/egg.jpg";
import broilers from "../../assets/broilers.jpg";
import layers from "../../assets/layers2.jpg";
import newChicks from "../../assets/new_chicks.jpg";
import feed from "../../assets/feed.jpg";
import bag from "../../assets/bagOfFeed.jpg";
import crateEggs from "../../assets/crateEggs.jpg";
import cockerels from "../../assets/cockerels.jpg";

const details = [
  {
    img: egg,
    Desc: "Farm-fresh eggs from free-range hens. Rich in protein and nutrients for your family's health.",
    price: "₦2,500",
    category: "Eggs",
    product: "Farm-Fresh Eggs",
  },
  {
    img: broilers,
    Desc: "Healthy, well-fed broiler chickens ready for processing. Perfect for meat production.",
    price: "₦3,500",
    category: "Broilers",
    product: "Broiler Chickens",
  },
  {
    img: layers,
    Desc: "Young layer hens ready to start egg production. Excellent for sustainable egg farming.",
    price: "₦2,800",
    category: "Layers",
    product: "Layers Birds",
  },
  {
    img: newChicks,
    Desc: "Healthy day-old broiler chicks from quality breeding stock. Perfect start for your poultry business.",
    price: "₦350",
    category: "Day-Old Chicks",
    product: "Day-Old Chicks",
  },
  {
    img: feed,
    Desc: "Premium quality layer feed formulated for optimal egg production and hen health.",
    price: "₦4,200",
    category: "Feeds",
    product: "Layer Feed",
  },
  {
    img: bag,
    Desc: "High-protein broiler feed designed for rapid growth and healthy weight gain.",
    price: "₦4,500",
    category: "Feeds",
    product: "Broiler Feed",
  },
  {
    img: crateEggs,
    Desc: "Perfect portion of farm-fresh eggs for smaller families. Same quality, smaller quantity.",
    price: "₦1,300",
    category: "Eggs",
    product: "Crate of Eggs",
  },
  {
    img: cockerels,
    Desc: "Strong, healthy cockerels perfect for breeding or meat production. Well-raised and healthy.",
    price: "₦4,000",
    category: "Broilers",
    product: "Cockerels",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  // for the selected button
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter Logic
  const filteredProducts =
    selectedCategory === "All"
      ? details
      : details.filter((item) => item.category === selectedCategory);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  return (
    <div className="py-10 bg-gray-100">
      {/* Filter Buttons */}
      <section className="px-6 md:px-10 lg:px-16 xl:px-4 flex items-center justify-center flex-wrap py-12 bg-white border-b border-gray-200 gap-2 sm:gap-4">
        {[
          { name: "All", icon: <RiAppsLine />, Desc: "All Products" },
          { name: "Eggs", icon: <RiCheckboxBlankCircleLine />, Desc: "Eggs" },
          { name: "Broilers", icon: <AiFillHeart />, Desc: "Broilers" },
          { name: "Layers", icon: <CiHeart />, Desc: "Layers" },
          {
            name: "Day-Old Chicks",
            icon: <RiHeart2Line />,
            Desc: "Day-Old Chicks",
          },
          { name: "Feeds", icon: <RiPlantLine />, Desc: "Feeds" },
        ].map((btn) => (
          <button
            key={btn.name}
            onClick={() => setSelectedCategory(btn.name)}
            className={`px-6 py-3 font-semibold transition-all duration-300 rounded-full m-2 flex items-center justify-center text-xl cursor-pointer ${
              selectedCategory === btn.name
                ? "bg-green-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600"
            }`}
          >
            <i className="mr-2">{btn.icon}</i> <p>{btn.Desc}</p>
          </button>
        ))}
      </section>
      {/* <section className="px-6 md:px-10 lg:px-16 xl:px-4 flex items-center justify-center flex-wrap py-12 bg-white border-b border-gray-200 gap-2 sm:gap-4">
        <button
          className={`px-6 py-3 font-semibold transition-all duration-300 bg-gray-100 hover:bg-green-100 rounded-full m-2 text-gray-700 hover:text-green-600 text-xl whitesace-nowrap cursor-pointer transform scale-105 flex items-center justify-center`}
        >
          <i>
            <RiAppsLine className="mr-2" />
          </i>
          All Products
        </button>
        <button className="px-6 py-3 font-semibold transition-all duration-300 bg-gray-100 hover:bg-green-100 rounded-full m-2 text-gray-700 hover:text-green-600 text-xl whitesace-nowrap cursor-pointer transform scale-105 flex items-center justify-center">
          <i>
            <RiCheckboxBlankCircleLine className="mr-2" />
          </i>
          Eggs
        </button>
        <button className="px-6 py-3 font-semibold transition-all duration-300 bg-gray-100 hover:bg-green-100 rounded-full m-2 text-gray-700 hover:text-green-600 text-xl whitesace-nowrap cursor-pointer transform scale-105 flex items-center justify-center">
          <i>
            <AiFillHeart className="mr-2" />
          </i>
          Broilers
        </button>
        <button className="px-6 py-3 font-semibold transition-all duration-300 bg-gray-100 hover:bg-green-100 rounded-full m-2 text-gray-700 hover:text-green-600 text-xl whitesace-nowrap cursor-pointer transform scale-105 flex items-center justify-center ">
          <i>
            <CiHeart className="mr-2" />
          </i>
          Layers
        </button>
        <button className="px-6 py-3 font-semibold transition-all duration-300 bg-gray-100 hover:bg-green-100 rounded-full m-2 text-gray-700 hover:text-green-600 text-xl whitesace-nowrap cursor-pointer transform scale-105 flex items-center justify-center">
          <i>
            <RiHeart2Line className="mr-2" />
          </i>
          Day-Old Chicks
        </button>
        <button className="px-6 py-3 font-semibold transition-all duration-300 bg-gray-100 hover:bg-green-100 rounded-full m-2 text-gray-700 hover:text-green-600 text-xl whitesace-nowrap cursor-pointer transform scale-105 flex items-center justify-center">
          <i>
            <RiPlantLine className="mr-2" />
          </i>
          Feeds
        </button>
      </section> */}
      {/* Product Grid */}
      <section className="border-t border-gray-100 py-10 px-6 md:px-10 lg:px-16 xl:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {filteredProducts.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg hover:shadow-xl shadow-lg transition-all duration-300 overflow-hidden group outline-none h-full"
            >
              {/* Best Seller Badge for all Eggs section (FROM CHATGPT) */}
              {/* {item.category.trim().toLowerCase() === "eggs" && (
                <span className="absolute top-4 left-4 z-20 bg-yellow-400 text-yellow-900 text-sm font-bold px-3 py-1 rounded-full shadow-md">
                  Best Seller
                </span>
              )} */}

              {/* Best Seller Badge for 1 Egg section (FROM CHATGPT) */}
              {item.product === "Farm-Fresh Eggs" && (
                <span className="absolute top-4 left-4 z-20 bg-yellow-400 text-yellow-900 text-sm font-bold px-3 py-1 rounded-full shadow-md">
                  Best Seller
                </span>
              )}

              {/* Best Seller Badge for 1 Egg section (FROM CHATGPT) */}
              {item.product === "Day-Old Chicks" && (
                <span className="absolute top-4 left-4 z-20 bg-green-400 text-green-900 text-sm font-bold px-3 py-1 rounded-full shadow-md">
                  New
                </span>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  alt=""
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-transform duration-300"></div>
              </div>
              <div className="p-6">
                {/* <h2 className="text-xl text-gray-800 font-bold mb-4">
                  {item.product}
                </h2> */}
                <p className=" text-gray-600 text-sm lg:text-[13px] leading-relaxed mb-4 text-justify">
                  {item.Desc}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-green-600 transition-all duration-300">
                    {item.price}
                  </p>
                  <button
                    onClick={() => handleOrderClick(item)}
                    type="button"
                    className={`font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl px-4 py-2 text-sm `}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        {/* FOR PEOPLE TO SELECT WHERE THEY WANT TO USE TO PLACE THEIR ORDERS */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-sm w-full relative text-center">
              <h2 className="text-2xl font-bold mb-4 text-green-600">
                Order {selectedProduct.product}
              </h2>
              <p className="mb-6 text-gray-700">
                Choose how you want to place your order:
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:+2347036010547`}
                  className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                >
                  📞 Call Us
                </a>
                <a
                  href={`https://wa.me/2347036010547?text=Hello! I want to order ${selectedProduct.product}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-400 text-white py-2 rounded-lg hover:bg-green-500 transition"
                >
                  💬 WhatsApp
                </a>
                <a
                  href={`mailto:oluwadunsindavid21@gmail.com?subject=Order Request for ${selectedProduct.product}&body=Hi, I’d like to order ${selectedProduct.product}.`}
                  className="bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  ✉️ Email
                </a>
                <a
                  href={`sms:+2347036010547?body=I want to order ${selectedProduct.product}`}
                  className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  💭 Text Message
                </a>
              </div>
              <button
                onClick={handleCloseModal}
                className="mt-6 text-sm text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        )}{" "}
      </section>
    </div>
  );
};

export default Products;
