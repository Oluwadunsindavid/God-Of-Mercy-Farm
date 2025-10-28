import React from "react";
// REUSABLE COMPONENT, FOR ALL THE TITLES
const Title = ({ text1, text2 }) => {
  return (
    <div className="text-center mb-16 px-6 md:px-10 lg:px-16 xl:px-40 transform transition-all">
      {/* <p className="text-gray-500">
        {text1} <span className="text-gray-700 font-medium">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] bg-gray-700"></p>
    </div> */}
      <p className="font-bold text-gray-800 text-4xl mb-4">
        {text1}
      </p>
      <p className="text-gray-600 text-xl max-w-3xl mx-auto">
       {text2}
      </p>
    </div>
  );
};

export default Title;
