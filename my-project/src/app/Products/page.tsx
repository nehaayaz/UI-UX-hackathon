import React from 'react';
import Image from "next/image";
import Topheader2 from '../component/Topheader2';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Products = () => {
  return (
    <div>
      <Topheader2 />
      <Header />
      <h4 className="font-bold pl-[22px] pt-[14px]">home → Products</h4>
      
      {/* Product Image */}
      <div className="flex justify-center pt-[50px] px-4 md:px-[250px]">
        <Image src="/images/productpage1.png" alt="pic" width={1000} height={700} />
      </div>

      {/* Product Tabs: Description, Additional Info, Reviews */}
      <div className="h-[50px] text-gray-600 w-full md:w-[1200px] place-items-center gap-5 font-bold flex justify-center space-x-8 mt-4">
        <p>Description</p>
        <p>Additional Information</p>
        <p>Reviews(0)</p>
      </div>

      {/* Second Product Image */}
      <div className="flex justify-center pt-[50px] px-4 md:px-[250px]">
        <Image src="/images/Productpic22.png" alt="pic" width={1000} height={700} />
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-[30px] px-4 md:px-[230px]">
        {/* Card 1 */}
        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden pt-[25px] text-center">
          <Image
            className="w-full h-60 object-cover"
            width={239} height={448}
            src="/images/prod1.png"
            alt="Product Image"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-gray-400">$16.48</p>
              <p className="text-green-600 font-bold">$6.48</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden pt-[25px] text-center">
          <Image
            className="w-full h-60 object-cover"
            width={239} height={448}
            src="/images/prod2.png"
            alt="Product Image"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-gray-400">$16.48</p>
              <p className="text-green-600 font-bold">$6.48</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden pt-[25px] text-center">
          <Image
            className="w-full h-60 object-cover"
            width={239} height={448}
            src="/images/prod3.png"
            alt="Product Image"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-gray-400">$16.48</p>
              <p className="text-green-600 font-bold">$6.48</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden pt-[25px] text-center">
          <Image
            className="w-full h-60 object-cover"
            width={239} height={448}
            src="/images/prod4.png"
            alt="Product Image"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-gray-400">$16.48</p>
              <p className="text-green-600 font-bold">$6.48</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-[30px] px-4 md:px-[230px]">
        {/* Card 5 */}
        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden pt-[25px] text-center">
          <Image
            className="w-full h-60 object-cover"
            width={239} height={448}
            src="/images/prod5.png"
            alt="Product Image"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-gray-400">$16.48</p>
              <p className="text-green-600 font-bold">$6.48</p>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden pt-[25px] text-center">
          <Image
            className="w-full h-60 object-cover"
            width={239} height={448}
            src="/images/prod6.png"
            alt="Product Image"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-gray-400">$16.48</p>
              <p className="text-green-600 font-bold">$6.48</p>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden pt-[25px] text-center">
          <Image
            className="w-full h-60 object-cover"
            width={239} height={448}
            src="/images/prod7.png"
            alt="Product Image"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-gray-400">$16.48</p>
              <p className="text-green-600 font-bold">$6.48</p>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden pt-[25px] text-center">
          <Image
            className="w-full h-60 object-cover"
            width={239} height={448}
            src="/images/prod8.png"
            alt="Product Image"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-gray-400">$16.48</p>
              <p className="text-green-600 font-bold">$6.48</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
