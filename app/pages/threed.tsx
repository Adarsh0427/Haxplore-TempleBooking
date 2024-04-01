"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ThreeDCardDemo_1() {
  const router = useRouter();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
            Somnath Temple
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
            A popular pilgrimage site located on the southern coast of Gujarat, drawing devotees of Lord Shiva.One of the twelve celebrated Jyotirlinga shrines mentioned in the ancient scriptures, carrying immense religious significance.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="/listings/6490b78de363ff489d0cfccc"
            className="px-36 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <h1 className="text-xl font-bold text-neutral-600 dark:text-white">Visit now →</h1>
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCardDemo_2() {
  const router = useRouter();
    return (
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
              Tirupati Balaji
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
                Tirupati Balaji Temple is a famous Vedic temple in the hill town of Tirumala, near Tirupati in Chittoor district of Andhra Pradesh.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tirumala_090615.jpg/800px-Tirumala_090615.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="/listings/648b9819fa01ebef545412c9"
            
              className="px-36 py-2 rounded-xl text-xs font-normal dark:text-white"
     
            >
              <h1 className="text-xl font-bold text-neutral-600 dark:text-white">Visit now →</h1>
            </CardItem>
            
          </div>
        </CardBody>
      </CardContainer>
    );
  }
  

  export function ThreeDCardDemo_3() {
    const router = useRouter();
    return (
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
              Golden Temple
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
                The Harmandir Sahib, also known as Darbar Sahib, is a Gurdwara located in the city of Amritsar, Punjab, India.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="/listings/648f78baefed74b08b0d09eb"

              className="px-36 py-2 rounded-xl text-xs font-normal dark:text-white"
             
            >
              <h1 className="text-xl font-bold text-neutral-600 dark:text-white">Visit now →</h1>
            </CardItem>
            
          </div>
        </CardBody>
      </CardContainer>
    );
  }
  