import React from "react";
import { data } from "./data.js";

const Cards = ({ name }) => {
  return (
    <div className="mt-10">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="ml-4 sm:ml-24 mt-10 text-lg sm:text-xl font-semibold">{name}</h1>
        <button className="bg-red-600 text-white p-1 mr-4 sm:mr-20 text-sm sm:text-base">
          VIEW ALL
        </button>
      </div>

      {/* Cards Section */}
      <div className="flex overflow-x-auto gap-4 mt-8 px-10 scrollbar-hide md:ml-15">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0  sm:w-56  p-4"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                className="w-full h-40 sm:h-40 object-cover rounded-lg"
                src={item.url}
                alt={item.name}
              />
              <span className="absolute bottom-2 right-2 text-white text-xs px-2 py-1 rounded">
                ₹{item.price}
              </span>
            </div>

            {/* Details Section */}
            <div className="mt-2">
              <h1 className="text-sm sm:text-base font-medium text-gray-800">
                {item.name}
              </h1>
              <button className="bg-red-800 text-white w-full p-1 mt-2 text-xs sm:text-sm">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;


