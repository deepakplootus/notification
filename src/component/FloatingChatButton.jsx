import React from "react";
import whatsappIcon from "../assets/whatsapp.png"; // Import your WhatsApp icon here
// Placeholder for WhatsApp Icon (replace with an actual SVG or icon library)



const FloatingChatButton = () => {
  return (
    <button
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-pink-500 hover:bg-pink-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
    >
      <img className="w-8 h-8 text-white"  src={whatsappIcon} alt="" />
    </button>
  );
};

export default FloatingChatButton;
