import React, { useState } from "react";
import Title from "../Title";
import { LuShieldCheck } from "react-icons/lu";

const items = [
  {
    icon: <LuShieldCheck />,
    p: "Quality Assurance",
    Desc: "Every product undergoes strict quality control to ensure you receive only the best. Our commitment to excellence is unwavering.",
    yellow: false,
  },
  {
    icon: <LuShieldCheck />,
    p: "Fast Delivery",
    Desc: "Quick and reliable delivery service ensures your products arrive fresh and on time. We value your time as much as you do.",
    yellow: true,
  },
  {
    icon: <LuShieldCheck />,
    p: "24/7 Support",
    Desc: "Our dedicated customer service team is always ready to help. Get support whenever you need it, day or night.",
    yellow: false,
  },
];

// const [yellow, setYellow] = useState(false)

const WCU = () => {
  return (
    <div className="bg-green-50 py-20 px-6 md:px-10 lg:px-16 xl:px-40">
      <Title
        text1={"Why Choose Us"}
        text2={"The benefits that set us apart from the competition"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-10 text-center"
          >
            <i className="mx-auto items-center flex justify-center bg-green-100 w-16 h-16 rounded-full text-green-600 mb-4 text-3xl">
              {item.icon}
            </i>
            {/* <i
              className={`mx-auto items-center flex justify-center w-16 h-16 rounded-full text-green-600 mb-4 text-3xl ${true ?"bg-red-700" : "bg-amber-400"}`}
            >
              {item.icon}
            </i> */}
            <h2 className="font-bold text-2xl text-gray-800 mb-4 leading-relaxed">
              {item.p}
            </h2>
            <p className="leading-relaxed">{item.Desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WCU;
