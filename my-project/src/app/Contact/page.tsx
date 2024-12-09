import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from '../component/Footer';
import Header2 from '../component/Header2';
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-white py-7">
      <Header2 />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-auto lg:h-[742px]">
          {/* Left Section */}
          <div className="pl-0 lg:pl-[100px]">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
              Get in touch<br /> today!
            </h2>
            <p className="mt-4 pt-6 font-bold text-lg sm:text-xl tracking-wide text-gray-600">
              We know how large objects<br />will act, but things on a small scale.
            </p>
            <div className="pt-4">
              <p className="text-gray-800 font-bold text-lg">Phone: +45 215 215</p>
              <p className="text-gray-800 font-bold text-lg">Fax : +451 215 215</p>
            </div>
            <div className="mt-7 flex space-x-4">
              <div className="flex gap-3">
                <FaTwitter className="w-6 h-6 text-black" />
                <FaFacebook className="w-6 h-6 text-black" />
                <IoLogoInstagram className="w-6 h-6 text-black" />
                <FaLinkedin className="w-6 h-6 text-black" />
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full flex justify-center">
            <Image
              src="/images/contactpic1.png" // Replace with your image path
              alt="Shopping Family"
              width={450}
              height={250}
              className="rounded-lg shadow-lg w-full sm:w-[450px] h-auto"
            />
          </div>
        </div>

        {/* Bottom Section (Contact Cards) */}
        <div className="mt-16 text-center">
          <h3 className="text-sm sm:text-base font-semibold text-gray-600">
            Visit Our Offices
          </h3>
          <p className="mt-4 font-bold text-gray-900 text-2xl sm:text-3xl">
            We help small businesses<br />with big ideas.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Contact Card 1 */}
            <div className="w-full h-[350px] bg-white p-6 sm:p-8 flex flex-col items-center">
              <FaPhoneAlt className="text-blue-700 w-16 h-16" />
              <h6 className="font-extrabold pt-6 text-lg text-gray-800">georgia.young@example.com</h6>
              <h6 className="font-extrabold pt-2 text-lg text-gray-800">georgia.young@ple.com</h6>
              <h5 className="font-extrabold pt-5 text-xl text-gray-800">Get Support</h5>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full mt-6 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Submit Request
              </button>
            </div>

            {/* Contact Card 2 */}
            <div className="w-full h-[350px] bg-[#252B42] p-6 sm:p-8 flex flex-col items-center">
              <FaLocationDot className="text-blue-700 w-16 h-16" />
              <h6 className="font-bold pt-6 text-lg text-white">georgia.young@example.com</h6>
              <h6 className="font-bold pt-2 text-lg text-white">georgia.young@ple.com</h6>
              <h5 className="font-bold pt-5 text-xl text-white">Get Support</h5>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full mt-6 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Submit Request
              </button>
            </div>

            {/* Contact Card 3 */}
            <div className="w-full h-[350px] bg-white p-6 sm:p-8 flex flex-col items-center">
              <FaEnvelope className="text-blue-700 w-16 h-16" />
              <h6 className="font-extrabold pt-6 text-lg text-gray-800">georgia.young@example.com</h6>
              <h6 className="font-extrabold pt-2 text-lg text-gray-800">georgia.young@ple.com</h6>
              <h5 className="font-extrabold pt-5 text-xl text-gray-800">Get Support</h5>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full mt-6 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Submit Request
              </button>
            </div>
          </div>

          {/* Final Section */}
          <div className="h-auto sm:h-[400px] w-full flex items-center justify-center bg-white mt-12">
            <div className="text-center">
              <h5 className="font-bold tracking-wider text-sm sm:text-base text-gray-700">
                WE Cant WAIT TO MEET YOU
              </h5>
              <h1 className="font-black tracking-wider text-4xl sm:text-6xl text-[#252B42] mt-6">
                Let’s Talk
              </h1>
              <div className="pt-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md text-sm sm:text-base h-[50px] w-[200px] tracking-wider">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
