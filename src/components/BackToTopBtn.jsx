import React, { useEffect, useState } from "react";
// import { ArrowUp } from "lucide-react"; // optional icon library; you can replace this with any arrow icon

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // show the button when scroll is beyond 200px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 w-10 h-10 rounded-full bg-yellow-400 text-white shadow-lg hover:bg-yellow-500 transition-all duration-300 z-50"
      >
        <span className="text-xl">↑</span>
      </button>
    )
  );
};

export default BackToTopButton;
