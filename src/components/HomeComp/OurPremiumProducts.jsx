import React from "react";
import Title from "../Title";
import egg from "../../assets/egg.jpg";
import broilers from "../../assets/broilers.jpg";
import layers from "../../assets/layers.jpg";
import newChicks from "../../assets/new_chicks.jpg";
import { useNavigate } from "react-router-dom";

// import image from "../../assets/abt_img.jpg";

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
  // FOR THE BUTTON BELOW TO NAVIGATE TO THE PRODUCTS pagesconst ViewProductsButton = () => {
  const navigate = useNavigate();

  // ✅ Button to go to the products page
  const handleClick = () => {
    navigate("/products"); // 👈 your target page route
  };

  // ✅ Dynamic email function
  const handleOrder = (product, price) => {
    const subject = encodeURIComponent(`Order Request: ${product}`);
    const body = encodeURIComponent(
      `Hello,\n\nI would like to place an order for:\n\nProduct: ${product}\nPrice: ${price}\n\nPlease provide more details about availability and delivery options.\n\nThank you.`
    );
    window.location.href = `mailto:oluwadunsindavid21@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <div className="py-10 px-6 md:px-10 lg:px-16 xl:px-40">
      <Title
        text1={"Our Premium Products"}
        text2={
          " Discover our range of fresh, high-quality poultry products, carefully raised and processed to meet the highest standards of quality and nutrition."
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {details.map((item, index) => (
          <div key={index}>
            <div className="bg-white rounded-lg hover:shadow-xl shadow-lg transition-all duration-300 overflow-hidden group outline-none h-full">
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
                    onClick={() => handleOrder(item.product, item.price)}
                    type="button"
                    className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl px-4 py-2 text-sm "
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleClick}
        type="button"
        className="font-bold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl px-8 py-4 mt-12 flex justify-center items-center mx-auto text-xl mb-10"
      >
        View All Products
      </button>
    </div>
  );
};

export default OurPremiumProducts;
