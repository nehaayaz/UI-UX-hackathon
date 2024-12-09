import Image from "next/image";
import React from 'react';
import Topheader from "./component/Topheader";
import Header from "./component/Header";
import Footer from "./component/Footer";
export default function Home() {
  return (
  <>
   <Topheader/>
   <Header/>

   <div>
    <Image src="/images/headpic.png" height={1000} width={1700} alt="PIC"/>
   </div>
   <div className="text-center p-7">
    <h3 className="font-bold text-[22px] p-2 tracking-[1px]">EDITOR’S PICK</h3>
    <p className="font-bold text-gray-600 text-[13px] p-0.5 tracking-[1px]">Problems trying to resolve the conflict between </p>
   </div>
   <div className="flex justify-center">
    <Image src="/images/secondpic.png" height={600} width={900} alt="PIC"/>
   </div>
   <div className="text-center p-7">
   <h4 className="font-bold text-[20px] p-1 tracking-[1px] text-gray-600">Featured Products</h4>
    <h3 className="font-extrabold text-[17px] p-1 tracking-[0.5px] text-gray-800">BESTSELLER PRODUCTS</h3>
    <p className="font-bold text-gray-600 text-[13px] p-0.5 tracking-[1px]">Problems trying to resolve the conflict between </p>
   </div>
   <div className="flex justify-center">
    <Image src="/images/thirdpic.png" height={600} width={900} alt="PIC"/>
   </div>
   <div className="flex justify-center">
    <Image src="/images/fourthpic.png" height={600} width={900} alt="PIC"/>
   </div>
   <div>
    <Image src="/images/fifthpic.png" height={1000} width={1700} alt="PIC"/>
   </div>
   <div>
    <Image src="/images/sixthpic.png" height={1000} width={1700} alt="PIC"/>
   </div>
   <div className="text-center p-7">
   <h6 className="font-bold p-1 text-[13px] tracking-[1px] text-blue-600">Practice Advice</h6>
    <h2 className="font-extrabold text-3xl p-1 tracking-[1px] text-gray-800">Feature Posts</h2>
    <p className="font-bold text-gray-600 text-[12px] p-1 tracking-[1px]">Problems trying to resolve the conflict between<br/>the two major realms of Classical physics: Newtonian mechanics  </p>
   </div>
   <div className="justify-center pl-[250px]">
    <Image src="/images/seventhpic.png" height={600} width={1000} alt="PIC"/>
   </div>
  

































  
   <Footer/>
  </>
  
  );
} 