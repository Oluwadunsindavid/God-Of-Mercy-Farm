// LOADER OF iBeep. I want to use it for my works

import React from "react";

const LogoLoaderAlt = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        {/* Pure CSS Logo */}
        <div className="relative size-16 mx-auto mb-6">
          {/* Spinning outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-100">
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 animate-spin"></div>
          </div>

          {/* Logo segments container */}
          <div className="absolute inset-1 rounded-full overflow-hidden bg-white">
            {/* Top right quarter */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500 rounded-tr-full animate-[rotate-top-right_3s_ease-in-out_infinite]"></div>

            {/* Bottom right quarter */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-500 rounded-br-full animate-[rotate-bottom-right_3s_ease-in-out_infinite]"></div>

            {/* Bottom left quarter */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500 rounded-bl-full animate-[rotate-bottom-left_3s_ease-in-out_infinite]"></div>

            {/* Top left quarter */}
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500 rounded-tl-full animate-[rotate-top-left_3s_ease-in-out_infinite]"></div>

            {/* Center white circle */}
            <div className="absolute inset-4 bg-white rounded-full border border-gray-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoLoaderAlt;
