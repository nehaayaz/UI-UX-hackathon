import React from 'react';
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

const Header = () => {
  return (
    <div className="w-full h-[67px] bg-[#FFFFFF] flex justify-between items-center px-4 sm:px-8 md:px-[24px]">
      {/* Left side with Logo */}
      <div className="flex gap-7">
        <h1 className="text-2xl font-semibold text-black">Bandage</h1>
      </div>

      {/* Navigation links */}
      <div className="hidden md:flex flex-grow justify-center">
        <ul className="flex gap-10 text-[15px] font-bold text-[#737373]">
          <li className="hover:text-black"><Link href="/">Home</Link></li>
          <li className="hover:text-black"><Link href="/Shop">Shop</Link></li>
          <li className="hover:text-black"><Link href="/About">About</Link></li>
          <li className="hover:text-black"><Link href="/Blog">Blog</Link></li>
          <li className="hover:text-black"><Link href="/Contact">Contact</Link></li>
          <li className="hover:text-black"><Link href="/Pages">Pages</Link></li>
        </ul>
      </div>

      {/* Right side with icons and Login/Register */}
      <div className="flex gap-3 items-center">
        <div className="hidden md:flex items-center gap-2">
          <IoPersonOutline className="w-[23px] h-[23px] text-[#23A6F0]" />
          <h6 className="text-[#23A6F0] font-[700] text-[17px]">Login / Register</h6>
        </div>

        {/* Icon Section (Search, Cart, Heart) */}
        <div className="flex gap-4">
          <IoSearch className="w-[23px] h-[23px] text-[#23A6F0]" />
          <PiShoppingCartLight className="w-[23px] h-[23px] text-[#23A6F0]" />
          <CiHeart className="w-[23px] h-[23px] text-[#23A6F0]" />
        </div>

        {/* Mobile Menu (Hamburger icon, appears on small screens) */}
        <div className="md:hidden flex items-center">
          {/* Add a hamburger icon for mobile menu */}
          <button className="text-[#23A6F0] text-2xl">☰</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
