import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Topheader2 from '../component/Topheader2';
import Header from '../component/Header';
import Footer from '../component/Footer';
import React from 'react'

const Shop = () => {
  return (
    <div>
      <Topheader2 />
      <Header />
      
      <div className="w-full h-[67px] bg-white flex justify-between items-center px-6 sm:px-8 lg:px-24">
        <div className="flex gap-7">
          <h1 className="text-xl font-semibold ml-[10px] text-black">Shop</h1>
          <ul className="flex gap-3 pt-2 text-[15px] font-bold text-[#737373]">
            <li className="hover:text-black"><Link href="/">Home →</Link></li>
            <li className="hover:text-black text-gray-400"><Link href="/Shop">Shop</Link></li>
          </ul>
        </div>
      </div>

      <div className="pl-[100px] pr-[100px] pt-[70px]">
        <Image src="/images/Shop(1).png" height={100} width={1500} alt="PIC" className="w-full" />
      </div>

      <div className="pl-[250px] pt-[60px]">
        <Image src="/images/shop(2).png" height={250} width={1000} alt="PIC" className="w-full" />
      </div>

      <div className="pl-[250px] pt-[20px]">
        <Image src="/images/Aboutpic4.png" height={250} width={1000} alt="PIC" className="w-full" />
      </div>

      <Footer />

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 px-6 sm:px-8 lg:px-24 pt-[30px]">
        {/* Card 1 */}
        <div className="w-full sm:w-60 bg-white shadow-md rounded-lg overflow-hidden pt-[25px] text-center">
          <Image
            className="w-full h-60 object-cover"
            width={239}
            height={448}
            src="/images/card1.png"
            alt="Product Image"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-gray-400">$16.48</p>
              <p className="text-green-600 font-bold">$6.48</p>
            </div>
            <div className="flex justify-center mt-3 space-x-2">
              <FaCircle className="text-blue-500" />
              <FaCircle className="text-teal-500" />
              <FaCircle className="text-orange-500" />
              <FaCircle className="text-teal-500" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-60 bg-white shadow-md rounded-lg overflow-hidden pt-[25px] text-center">
          <Image
            className="w-full h-60 object-cover"
            width={239}
            height={448}
            src="/images/card2.png"
            alt="Product Image"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-gray-400">$16.48</p>
              <p className="text-green-600 font-bold">$6.48</p>
            </div>
            <div className="flex justify-center mt-3 space-x-2">
              <FaCircle className="text-blue-500" />
              <FaCircle className="text-teal-500" />
              <FaCircle className="text-orange-500" />
              <FaCircle className="text-teal-500" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-60 bg-white shadow-md rounded-lg overflow-hidden pt-[25px] text-center">
          <Image
            className="w-full h-60 object-cover"
            width={239}
            height={448}
            src="/images/card3.png"
            alt="Product Image"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-gray-400">$16.48</p>
              <p className="text-green-600 font-bold">$6.48</p>
            </div>
            <div className="flex justify-center mt-3 space-x-2">
              <FaCircle className="text-blue-500" />
              <FaCircle className="text-teal-500" />
              <FaCircle className="text-orange-500" />
              <FaCircle className="text-teal-500" />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full sm:w-60 bg-white shadow-md rounded-lg overflow-hidden pt-[25px] text-center">
          <Image
            className="w-full h-60 object-cover"
            width={239}
            height={448}
            src="/images/card4.png"
            alt="Product Image"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-gray-400">$16.48</p>
              <p className="text-green-600 font-bold">$6.48</p>
            </div>
            <div className="flex justify-center mt-3 space-x-2">
              <FaCircle className="text-blue-500" />
              <FaCircle className="text-teal-500" />
              <FaCircle className="text-orange-500" />
              <FaCircle className="text-teal-500" />
            </div>
          </div>
        </div>

      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center p-9 bg-gray-100">
        <div className="flex border border-gray-300 rounded-md overflow-hidden">
          {/* First Button */}
          <button className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-200">
            First
          </button>
          {/* Page Numbers */}
          <button className="px-4 py-2 border-l border-gray-300 text-gray-600 hover:bg-gray-200">
            1
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white font-medium">
            2
          </button>
          <button className="px-4 py-2 border-l border-gray-300 text-gray-600 hover:bg-gray-200">
            3
          </button>
          {/* Next Button */}
          <button className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-200">
            Next
          </button>
        </div>
      </div>

    </div>
  )
}

export default Shop;
