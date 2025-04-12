import React from "react";
import logo from "../assets/logo.png";
import { User, Search, Heart, ShoppingBag, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#E85892] w-full h-7 flex justify-center items-center">
        <h1 className="text-white text-[12px] sm:text-[14px]">
          YOUR ONE-stop shop for spirituality
        </h1>
      </div>

      {/* Navbar */}
      <div className="w-full flex justify-between items-center px-4 sm:px-10 py-3">
        {/* Left Section (Menu and Wishlist Icons for Mobile) */}
        <div className="flex items-center gap-4">
          {/* Menu Icon */}
          <div className="sm:hidden">
            <Menu className="w-6 h-6 text-gray-800" />
          </div>
          {/* Wishlist Icon */}
          <div className="sm:hidden">
            <Heart className="w-6 h-6 text-gray-800" />
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center items-center w-full sm:w-auto">
          <img
            className="w-[101px] h-[53px]"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Right Section (Search and Cart Icons for Mobile) */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <div className="sm:hidden">
            <Search className="w-6 h-6 text-gray-800" />
          </div>
          {/* Cart Icon */}
          <div className="sm:hidden">
            <ShoppingBag className="w-6 h-6 text-gray-800" />
          </div>
        </div>

        {/* Menu Items (Hidden on Mobile) */}
        <div className="hidden sm:flex justify-between items-center gap-8">
          <span className="text-[14px] mt-3">Shop</span>
          <span className="text-[14px] mt-3">HomeDecor</span>
          <span className="text-[14px] mt-3">Festive Decor</span>
          <span className="text-[14px] mt-3">Corporate Gifting</span>
        </div>

        {/* Icons (Visible on Desktop) */}
        <div className="hidden sm:flex justify-between items-center gap-8">
          <span className="text-[14px] mt-3 flex flex-col items-center">
            <User />
            <p className="text-[7px] mt-1">Account</p>
          </span>
          <span className="text-[14px] mt-3 flex flex-col items-center">
            <Search />
            <p className="text-[7px] mt-1">Search</p>
          </span>
          <span className="text-[14px] mt-3 flex flex-col items-center">
            <Heart />
            <p className="text-[7px] mt-1">Wishlist</p>
          </span>
          <span className="text-[14px] mt-3 flex flex-col items-center">
            <ShoppingBag />
            <p className="text-[7px] mt-1">Cart</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;