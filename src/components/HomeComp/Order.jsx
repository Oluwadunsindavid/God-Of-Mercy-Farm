import React from "react";

const Order = () => {
  return (
    <div className="bg-green-600 py-20 px-6 md:px-10 lg:px-16 xl:px-40">
      <h1 className="text-white font-bold text-center text-4xl mb-4">
        Ready to Order Fresh Products?
      </h1>
      <p className="text-white text-center text-xl max-w-3xl mx-auto">
        "Join thousands of satisfied customers who trust us for their poultry
        needs. Place your order today and taste the difference!"
      </p>
      <div className="flex flex-col items-center justify-center sm:flex-row gap-10">
        <button className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg hover:shadow-xl w-full mt-10 sm:mt-10 md:w-[20%] py-4 text-lg">
          Place Your Orders
        </button>
        <button className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap border-2 border-green-500 hover:bg-green-500 text-black hover:text-white shadow-lg hover:shadow-xl w-full sm:mt-10 md:w-[20%] py-4 text-lg">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Order;
