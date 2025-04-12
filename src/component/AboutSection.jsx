import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-white py-10 px-4 text-center">
      {/* White background */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          My Pooja Box - A One-stop Festive Decor & Gifting Shop
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6 w-full max-w-lg mx-auto">
          Being a one-stop pooja samagri online store in India, My Pooja Box bridges the gap between devotees and devotion. We have sorted all your devotional needs by putting forth a wide assortment of products by making it easier for you to buy pooja items online.
        </p>
        <button className="text-pink-600 font-semibold hover:text-pink-700 transition duration-200">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
