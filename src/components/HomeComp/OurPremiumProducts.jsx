// import React from "react";
// import Title from "../Title";
// import egg from "../../assets/egg.jpg";
// import broilers from "../../assets/broilers.jpg";
// import layers from "../../assets/layers.jpg";
// import newChicks from "../../assets/new_chicks.jpg";
// import { useNavigate } from "react-router-dom";

// // import image from "../../assets/abt_img.jpg";

// const details = [
//   {
//     img: egg,
//     product: "Fresh Farm Eggs",
//     Desc: "Premium quality fresh eggs from free-range hens, rich in nutrients and perfect for your family's daily needs.",
//     price: "₦2,500/crate",
//   },
//   {
//     img: broilers,
//     product: "Broiler Chickens",
//     Desc: "Healthy, well-fed broiler chickens raised with care. Perfect for family meals and special occasions.",
//     price: "₦3,500/kg",
//   },
//   {
//     img: layers,
//     product: "Layers Birds",
//     Desc: "High-quality layer birds that produce excellent eggs. Perfect for starting your own egg production.",
//     price: "₦4,200/bird",
//   },
//   {
//     img: newChicks,
//     product: "Day-Old Chicks",
//     Desc: "Healthy day-old chicks from premium breeding stock. Great for starting your poultry farming journey.",
//     price: "₦450/chick",
//   },
// ];

// const OurPremiumProducts = () => {
//   // FOR THE BUTTON BELOW TO NAVIGATE TO THE PRODUCTS pagesconst ViewProductsButton = () => {
//   const navigate = useNavigate();

//   // ✅ Button to go to the products page
//   const handleClick = () => {
//     navigate("/products"); // 👈 your target page route
//   };

//   // ✅ Dynamic email function
//   const handleOrder = (product, price) => {
//     const subject = encodeURIComponent(`Order Request: ${product}`);
//     const body = encodeURIComponent(
//       `Hello,\n\nI would like to place an order for:\n\nProduct: ${product}\nPrice: ${price}\n\nPlease provide more details about availability and delivery options.\n\nThank you.`
//     );
//     window.location.href = `mailto:oluwadunsindavid21@gmail.com?subject=${subject}&body=${body}`;
//   };
//   return (
//     <div className="py-10 px-6 md:px-10 lg:px-16 xl:px-40">
//       <Title
//         text1={"Our Premium Products"}
//         text2={
//           " Discover our range of fresh, high-quality poultry products, carefully raised and processed to meet the highest standards of quality and nutrition."
//         }
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
//         {details.map((item, index) => (
//           <div key={index}>
//             <div className="bg-white rounded-lg hover:shadow-xl shadow-lg transition-all duration-300 overflow-hidden group outline-none h-full">
//               <div className="relative overflow-hidden">
//                 <img
//                   src={item.img}
//                   className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
//                   alt=""
//                 />
//                 <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-transform duration-300"></div>
//               </div>
//               <div className="p-6">
//                 <h2 className="text-xl text-gray-800 font-bold mb-4">
//                   {item.product}
//                 </h2>
//                 <p className=" text-gray-600 text-sm lg:text-[13px] leading-relaxed mb-4 text-justify">
//                   {item.Desc}
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <p className="sm:text-xl font-bold text-green-600 transition-all duration-300">
//                     {item.price}
//                   </p>
//                   <button
//                     onClick={() => handleOrder(item.product, item.price)}
//                     type="button"
//                     className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl px-4 py-2 text-sm "
//                   >
//                     Order Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={handleClick}
//         type="button"
//         className="font-bold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl px-8 py-4 mt-12 flex justify-center items-center mx-auto text-xl mb-10"
//       >
//         View All Products
//       </button>
//     </div>
//   );
// };

// export default OurPremiumProducts;

import React, { useState } from "react";
import Title from "../Title";
import egg from "../../assets/egg.jpg";
import broilers from "../../assets/broilers.jpg";
import layers from "../../assets/layers.jpg";
import newChicks from "../../assets/new_chicks.jpg";

const details = [
  {
    img: egg,
    product: "Fresh Farm Eggs",
    Desc: "Premium quality fresh eggs from free-range hens, rich in nutrients and perfect for your family's daily needs.",
    price: "₦2,500/crate",
  },
  {
    img: broilers,
    product: "Broiler Chickens",
    Desc: "Healthy, well-fed broiler chickens raised with care. Perfect for family meals and special occasions.",
    price: "₦3,500/kg",
  },
  {
    img: layers,
    product: "Layers Birds",
    Desc: "High-quality layer birds that produce excellent eggs. Perfect for starting your own egg production.",
    price: "₦4,200/bird",
  },
  {
    img: newChicks,
    product: "Day-Old Chicks",
    Desc: "Healthy day-old chicks from premium breeding stock. Great for starting your poultry farming journey.",
    price: "₦450/chick",
  },
];

const OurPremiumProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="py-10 px-6 md:px-10 lg:px-16 xl:px-40">
      <Title
        text1={"Our Premium Products"}
        text2={
          "Discover our range of fresh, high-quality poultry products, carefully raised and processed to meet the highest standards of quality and nutrition."
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {details.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg hover:shadow-xl shadow-lg transition-all duration-300 overflow-hidden group outline-none h-full"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-transform duration-300"></div>
            </div>
            <div className="p-6">
              <h2 className="text-xl text-gray-800 font-bold mb-4">
                {item.product}
              </h2>
              <p className=" text-gray-600 text-sm lg:text-[13px] leading-relaxed mb-4 text-justify">
                {item.Desc}
              </p>
              <div className="flex justify-between items-center">
                <p className="sm:text-xl font-bold text-green-600 transition-all duration-300">
                  {item.price}
                </p>
                <button
                  onClick={() => handleOrderClick(item)}
                  type="button"
                  className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl px-4 py-2 text-sm "
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
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
      )}
    </div>
  );
};

export default OurPremiumProducts;
