import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";
import { RiCustomerServiceLine } from "react-icons/ri";

const items = [
  {
    icon: <FaRegHeart />,
    heading: "Quality First",
    subHeading:
      "Never compromising on the quality of our products and services.",
  },
  {
    icon: <LuLeaf />,
    heading: "Sustainability",
    subHeading: "Committed to environmentally responsible farming practices.",
  },
  {
    icon: <RiTeamLine />,
    heading: "Integrity",
    subHeading: "Honest, transparent business practices in all our dealings.",
  },
  {
    icon: <RiCustomerServiceLine />,
    heading: "Excellence",
    subHeading: "Striving for excellence in every aspect of our operations.",
  },
];
const OurCoreValues = () => {
  return (
    <div className="py-20 px-6 md:px-10 lg:px-16 xl:px-40 bg-green-600 text-white">
      <h1 className="text-4xl font-bold text-center mb-4">Our Core Values</h1>
      <p className="text-center text-xl leading-relaxed mb-16">
        The principles that guide everything we do
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 space-y-2">
        {items.map((item, index) => (
          <div className="text-center" key={index}>
            <i className="flex items-center justify-center rounded-full w-16 h-16 bg-white/20 text-3xl mx-auto mb-4">
              {item.icon}
            </i>
            <h2 className="text-xl font-semibold mb-2">{item.heading}</h2>
            <p className="text-green-100">{item.subHeading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCoreValues;
