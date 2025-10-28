import React from "react";
import Title from "../Title";
import { LuStar } from "react-icons/lu";

const items = [
  {
    icon: <LuStar fill="yellow-500" />,
    p: 'I have been buying eggs from God of Mercy Poultry Farm for over 2 years. The quality is consistently excellent and the service is outstanding!"',
    person: "Mrs. Adebayo",
    location: "Lagos",
  },
  {
    icon: <LuStar fill="yellow-500" />,
    p: '"Their broiler chickens are the best I have ever tasted. Fresh, healthy, and delivered right to my doorstep. Highly recommended!"',
    person: "Mr. Johnson",
    location: "Abuja",
  },
  {
    icon: <LuStar fill="yellow-500" />,
    p: '"As a restaurant owner, I need reliable suppliers. God of Mercy Poultry Farm has never disappointed me. Quality products, on-time delivery!"',
    person: "Chef Maria",
    location: "Ondo",
  },
];

const Reviews = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-10 lg:px-16 xl:px-40">
      <Title
        text1={"What Our Customers Say"}
        text2={"Real feedback from our satisfied customers"}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-50 shadow-xl rounded-xl p-10">
            <div className="flex mb-6 gap-1">
              <i className="text-yellow-400 fill-yellow-400">{item.icon}</i>
              <i className="text-yellow-400 fill-yellow-400">{item.icon}</i>
              <i className="text-yellow-400 fill-yellow-400">{item.icon}</i>
              <i className="text-yellow-400 fill-yellow-400">{item.icon}</i>
              <i className="text-yellow-400 fill-yellow-400">{item.icon}</i>
            </div>
            <p className="italic mb-6 text-gray-600 leading-relaxed">
              {item.p}
            </p>
            <b>{item.person}</b>
            <p className="text-gray-500">{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
