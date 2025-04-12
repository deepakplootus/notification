import React, { useRef } from 'react';
import { imagecircle } from "../component/data.js";
import Cards from './Cards.jsx';
import Review from './Review.jsx';
import { ChevronLeft, ChevronRight } from "lucide-react";
import FloatingChatButton from './FloatingChatButton.jsx';
import AboutSection from './AboutSection.jsx';
import Footer from './Footer.jsx';

export const Sliderbar = () => {
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Scroll left by 300px
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Scroll right by 300px
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="flex items-center gap-5">
        {/* Left Scroll Button */}
        <span
          className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full cursor-pointer"
          onClick={handleScrollLeft}
        >
          <ChevronLeft className="text-white" />
        </span>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-5 scrollbar-hide mt-10"
        >
          {imagecircle.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                className="w-40 rounded-full"
                src={item.url}
                alt={item.title}
              />
              <p className="text-center mt-4">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <span
          className="w-10 h-10 flex justify-center items-center bg-gray-800 rounded-full cursor-pointer"
          onClick={handleScrollRight}
        >
          <ChevronRight className="text-white" />
        </span>
      </div>
      <div>
        <Cards name="Pooja Room Decor" />
        <Cards name="Crystal Bracelets" />
        <Cards name="Pooja Essentials" />
        <Review />
        <FloatingChatButton />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
};
