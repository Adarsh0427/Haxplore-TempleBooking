import Image from "next/image";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "../pages/appbar"; 
import {HomeHeaderIntro , HomeHeaderCrausal}  from "../pages/home_page";




export default function Home() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col justify-center bg-white">
        <div className="flex justify-center ">
          <HomeHeaderCrausal />
        </div>
        <div>
          <HomeHeaderIntro />
        </div>
      </div>
      
      <div className="my-8 font-sans flex items-center before:h-px before:flex-1 before:bg-gray-300  after:h-px after:flex-1 after:bg-gray-300  "></div>
    </div>
  );
}