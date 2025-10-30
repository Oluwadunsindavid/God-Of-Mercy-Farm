import React from "react";
import Title from "../Title";
import CEOImg from "../../assets/CEO.jpg";
import HeadVetImg from "../../assets/Head Vet.jpg";
import OpsManagerImg from "../../assets/OpsMan.jpg";

const items = [
  {
    img: CEOImg,
    person: "Akinmuboni Majeed",
    position: "Founder & CEO",
    more: "With over 15 years in agriculture, Chief Okafor leads our vision of providing quality poultry products to Nigerian families.",
  },
  {
    img: HeadVetImg,
    person: "Dr. Michael Adebayo",
    position: "Head Veterinarian",
    more: "Dr. Adebayo ensures the health and welfare of all our birds with her expertise in veterinary medicine.",
  },
  {
    img: OpsManagerImg,
    person: "Mr. David Okoro",
    position: "Operations Manager",
    more: "David oversees daily operations and ensures our products meet the highest quality standards.",
  },
];

const OurTeam = () => {
  return (
    <div className="px-6 md:px-10 lg:px-16 xl:px-40 py-20 bg-gray-50">
      <Title
        text1={"Meet Our Team"}
        text2={"The dedicated professionals behind our success"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {items.map((item, index) => (
          <div key={index}>
            <div className="bg-white rounded-lg hover:shadow-xl shadow-lg transition-all duration-300 overflow-hidden group outline-none h-full">
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  alt=""
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-transform duration-300"></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl text-gray-800 font-bold mb-1">
                  {item.person}
                </h2>
                <p className=" text-green-600 text-lg leading-relaxed mb-4 text-justify">
                  {item.position}
                </p>
                <div className="flex justify-between items-center">
                  <p className="sm:text-xl leading-relaxed text-gray-800 transition-all duration-300">
                    {item.more}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
