import Image from "next/image";
import "../globals.css";
import dynamic from "next/dynamic";
import Navbar from "../pages/appbar";
import { SliderIndicatorsControlsInside } from "../pages/home_page";
import AccordionIcon from "../pages/accordions";
import {ThreeDCardDemo_1 , ThreeDCardDemo_2, ThreeDCardDemo_3 } from "../pages/threed";

export default function Home_1() {
  return (
    <div className="mt-0">
      <div className="flex flex-col justify-center bg-white">
        <div className="flex justify-center p-4">
          <SliderIndicatorsControlsInside />
        </div>
      </div>
      <div className="flex flex-row justify-center bg-white">
        <div className="flex justify-center p-4">
          <ThreeDCardDemo_1 />
        </div>
        <div className="flex justify-center p-4">
          <ThreeDCardDemo_2 />
        </div>
        <div className="flex justify-center p-4">
          <ThreeDCardDemo_3 />
        </div>
      </div>
      <div className="flex flex-col justify-center bg-white">
        <div className="flex pl-28 pr-28 justify-center ">
        <AccordionIcon />
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}
