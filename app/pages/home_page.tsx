"use client";

import React, { useState, useEffect  } from "react";
import Glide from "@glidejs/glide";
import { useRouter } from "next/navigation";

export function HomeHeaderIntro() {
  const router = useRouter();
  return (
    <>
      <div className="mt-8 flex flex-col items-center justify-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-orange-400">
            Book
          </span>{" "}
          your next Ticket
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          A simple and easy way to book your tickets
        </p>

        <div className="flex items-center justify-center mt-4">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}






export function SliderIndicatorsControlsInside() {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        swipeable: "glide__swipeable",
        dragging: "glide__dragging",
        direction: {
          ltr: "glide__direction--ltr",
          rtl: "glide__direction--rtl",
        },
        type: {
          slider: "glide__type--slider",
          carousel: "glide__type--carousel",
        },
        slide: {
          active: "glide__slide--active",
          clone: "glide__slide--clone",
        },
        arrow: {
          disabled: "glide__arrow--disabled",
        },
        nav: {
          active: "glide__nav--active",
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Slider with indicators & controls inside --> */}
      <div className="relative w-[85%]  glide-03 rounded-2xl">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden " data-glide-el="track">
          <ul className="whitespace-no-wrap h-[70vh] flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg"
                className="w-full h-lvh m-auto"
              />
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Meenakshi_Amman_West_Tower.jpg"
                className="w-full h-lvh m-auto"
              />
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/34/Vaishno_Devi_Bhavan.jpg"
                className="w-full h-lvh m-auto"
              />
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg"
                className="w-full h-lvh m-auto"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/20 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="absolute bottom-0 flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Slider with indicators & controls inside --> */}
    </>
  )
}