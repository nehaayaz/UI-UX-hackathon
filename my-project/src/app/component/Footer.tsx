import React from 'react';
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Top section with logo and social media icons */}
      <div className="w-full h-[140px] bg-gray-100 flex justify-between items-center px-4 sm:px-8 lg:px-[200px]">
        <h1 className="text-[22px] font-bold text-gray-700">Bandage</h1>
        <div className="flex gap-4">
          <MdOutlineFacebook className="w-[25px] h-[25px] text-[#23A6F0]" />
          <IoLogoInstagram className="w-[25px] h-[25px] text-[#23A6F0]" />
          <FaTwitter className="w-[25px] h-[25px] text-[#23A6F0]" />
        </div>
      </div>

      {/* Footer content section with 4 columns */}
      <div className="w-full h-auto flex flex-wrap bg-white p-4 sm:p-8">
        <div className="w-full sm:w-[300px] p-4">
          <h5 className="font-bold tracking-[1px] text-[18px]">Company Info</h5>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[20px]">About Us</p>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">Carrier</p>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">We are hiring</p>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">Blog</p>
        </div>

        <div className="w-full sm:w-[300px] p-4">
          <h5 className="font-bold tracking-[1px] text-[18px]">Legal</h5>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[20px]">About Us</p>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">Carrier</p>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">We are hiring</p>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">Blog</p>
        </div>

        <div className="w-full sm:w-[300px] p-4">
          <h5 className="font-bold tracking-[1px] text-[18px]">Features</h5>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[20px]">Business Marketing</p>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">User Analytic</p>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">Live Chat</p>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">Unlimited Support</p>
        </div>

        <div className="w-full sm:w-[300px] p-4">
          <h5 className="font-bold tracking-[1px] text-[18px]">Resources</h5>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[20px]">IOCS & Android</p>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">Watch a Demo</p>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">Customers</p>
          <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">API</p>
        </div>

        {/* Placeholder for future content */}
        <div className="w-full sm:w-[350px] bg-gray-700"></div>
      </div>

      {/* Footer bottom text */}
      <div className="text-gray-400 bg-gray-100 w-full h-[60px] font-bold text-[14px] tracking-wider text-center py-[20px]">
        <h6>Made With Love By Finland All Right Reserved</h6>
      </div>
    </>
  );
};

export default Footer;
