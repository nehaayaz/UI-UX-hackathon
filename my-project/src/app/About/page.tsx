import Image from "next/image";
import React from 'react';
import Topheader from '../component/Topheader';
import Header2 from '../component/Header2';
import Footer from '../component/Footer';

const About = () => {
  return (
    <div className="w-full">
      <Topheader />
      <Header2 />
      
      {/* About Image Section */}
      <div className="w-full max-w-full">
        <Image src="/images/Aboutpic1.png" height={1000} width={1700} alt="About Image" className="w-full h-auto"/>
      </div>
      
      {/* Section with Text Content */}
      <div className="flex flex-col lg:flex-row pt-6 px-4 lg:px-24">
        <div className="flex-1 h-[150px] mb-4 lg:mb-0 lg:pl-20">
          <p className="text-red-600 text-[14px]">Problems trying</p>
          <h3 className="font-bold text-xl lg:text-2xl pt-4">Met minim Mollie non desert<br />Alamo est sit cliquey dolor do met sent.</h3>
        </div>
        <div className="flex-1 h-[150px] p-5">
          <p className="text-gray-600 text-[14px]">Problems trying to resolve the conflict between<br />the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
      </div>

      {/* Stats Section (Grid) */}
      <div className="flex justify-center items-center py-10 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-[30px] text-center">
          <div>
            <h2 className="text-4xl font-bold">15K</h2>
            <p className="text-gray-500 font-bold">Happy Customers</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">150K</h2>
            <p className="text-gray-500 font-bold">Monthly Visitors</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">15</h2>
            <p className="text-gray-500 font-bold">Countries Worldwide</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="text-gray-500 font-bold">Top Partners</p>
          </div>
        </div>
      </div>

      {/* About Image Section 2 */}
      <div className="w-full flex justify-center">
        <Image src="/images/Aboutpic2.png" height={540} width={989} alt="About Image" className="w-full h-auto" />
      </div>

      {/* Meet Our Team Section */}
      <div className="text-center p-7">
        <h2 className="font-extrabold text-4xl p-3 tracking-[1px] text-gray-800">Meet Our Team</h2>
        <p className="font-bold text-gray-600 text-[14px] p-3 tracking-[1px]">Problems trying to resolve the conflict between<br />the two major realms of Classical physics: Newtonian mechanics</p>
      </div>

      {/* Team Image */}
      <div className="flex justify-center pl-[50px]">
        <Image src="/images/Aboutpic3.png" height={600} width={1000} alt="Team Image" className="w-full h-auto"/>
      </div>

      {/* Big Companies Section */}
      <div className="text-center p-7">
        <h2 className="font-extrabold text-4xl p-3 tracking-[1px] text-gray-800">Big Companies Are Here</h2>
        <p className="font-bold text-gray-600 text-[14px] p-3 tracking-[1px]">Problems trying to resolve the conflict between<br />the two major realms of Classical physics: Newtonian mechanics</p>
      </div>

      {/* Big Companies Image */}
      <div className="w-full flex justify-center">
        <Image src="/images/Aboutpic4.png" height={200} width={1000} alt="Big Companies" className="w-full h-auto"/>
      </div>
      
      {/* Final Image Section */}
      <div className="w-full">
        <Image src="/images/Aboutpic5.png" height={800} width={1690} alt="Final Image" className="w-full h-auto"/>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
