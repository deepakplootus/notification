import React from 'react';
import { Sliderbar } from './Sliderbar';

const Homepage = () => {
  return (
    <div>
      <div className="mt-10">
        <video
          src="https://cdn.shopify.com/videos/c/o/v/8c0ad6982d6a4ceda5f92d9b3c860a5a.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
        />
      </div>
      <Sliderbar />
    </div>
  );
};

export default Homepage;