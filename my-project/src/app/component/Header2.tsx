import React from 'react';
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";


const Header = () => {
  return (
    <div className="w-full h-[67px] bg-[#FFFFFF] flex justify-between items-center px-4 sm:px-8 md:px-[24px]">
      
      {/* Left side with logo and navigation */}
      <div className="flex gap-7 items-center">
        <h1 className="text-2xl font-semibold text-black">Bandage</h1>
        
        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-10 text-[15px] font-bold text-[#737373] ml-[15%]">
          <li className="hover:text-black"><Link href="/">Home</Link></li>
          <li className="hover:text-black"><Link href="/Products">Products</Link></li>
          <li className="hover:text-black"><Link href="/Pricing">Pricing</Link></li>
          <li className="hover:text-black"><Link href="/Contact">Contact</Link></li>
        </ul>
      </div>
      
      {/* Right side with Login and Become a Member Button */}
      <div className="flex gap-5 items-center">
        
        {/* Login Section */}
        <div className="hidden sm:flex items-center">
          <h6 className="text-[#23A6F0] font-[700] text-[17px] pt-[10px]">Login</h6>
        </div>
        
        {/* Become a Member Button */}
        <button className="hidden sm:block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md text-[12px] h-[50px] w-[200px] tracking-[1px]">
          Become a Member
        </button>

        {/* Mobile View: Login Button and Become a Member (Visible on mobile screens) */}
        <div className="sm:hidden flex gap-3 items-center">
          <IoPersonOutline className="w-[23px] h-[23px] text-[#23A6F0]" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md text-[12px] h-[40px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
