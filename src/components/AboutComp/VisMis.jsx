import React from "react";
import { LuShieldCheck } from "react-icons/lu";

const items = [
  {
    icon: <LuShieldCheck />,
    p: "Our Vision",
    Desc: "To become the leading poultry farm in West Africa, known for exceptional quality, sustainable practices, and unwavering commitment to customer satisfaction. We envision a future where every Nigerian family has access to fresh, nutritious poultry products.",
    yellow: false,
  },
  {
    icon: <LuShieldCheck />,
    p: "Our Mission",
    Desc: "To provide premium quality poultry products through ethical farming practices, innovative technology, and exceptional customer service. We are committed to supporting local communities while maintaining the highest standards of animal welfare and food safety.",
    yellow: true,
  },
];
const VisMis = () => {
  return (
    <div className="px-6 md:px-10 lg:px-16 xl:px-40 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl p-10 text-left ${
              item.yellow ? "bg-yellow-50" : "bg-green-50"
            }`}
          >
            {/* (FROM CHATGPT) TO MAKE THE 2ND DIV HAVE A YELLOW COLOR BACKGROUND AND YELLOW COLOR TEXT */}
            <i
              className={` items-center flex justify-center bg-green-100 w-16 h-16 rounded-full text-green-600 mb-4 text-3xl transition-all duration-300 ${
                item.yellow
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {item.icon}
            </i>
            <h2 className="font-bold text-3xl text-gray-800 mb-4 leading-relaxed">
              {item.p}
            </h2>
            <p className="leading-relaxed text-lg">{item.Desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisMis;
