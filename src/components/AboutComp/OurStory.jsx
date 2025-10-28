import React from "react";
import image from "../../assets/AbtFowlImg.jpg";

const OurStory = () => {
  return (
    <div className="px-6 md:px-10 lg:px-16 xl:px-40 py-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="font-bold text-4xl text-gray-800 mb-6">Our Story</h1>
          <p className=" leading-relaxed">
            God of Mercy Poultry Farm began as a small family business with a
            simple dream: to provide fresh, quality poultry products to our
            local community. What started with just 100 birds has grown into one
            of Nigeria's most respected poultry operations.
          </p>
          <p className="my-6 leading-relaxed">
            Our founder, Chief Emmanuel Okafor, recognized the need for
            reliable, high-quality poultry products in the Nigerian market.
            Through dedication, hard work, and an unwavering commitment to
            excellence, we have built a reputation that spans across the nation.
          </p>
          <p className="mb-8 leading-relaxed">
            Today, we proudly serve thousands of customers, from individual
            families to large restaurants and hotels, all while maintaining the
            same values that started our journey: quality, integrity, and
            customer satisfaction.
          </p>
          <button
            type="button"
            className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl px-6 py-3 text-base mb-8"
          >
            Get In Touch
          </button>
        </div>
        <div>
          {" "}
          <img
            src={image}
            className="mb-6 rounded-lg shadow-xl object-cover object-top w-full h-96"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
