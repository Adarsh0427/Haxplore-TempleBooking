'use client';

import useCountries from '@/app/hooks/useCountries';
import { SafeListing, SafeUser } from '@/app/types';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { HiOutlineLocationMarker } from 'react-icons/hi';

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  currentUser?: SafeUser | null;
  place: string;
  id: string;
  user: SafeUser;
  listing: SafeListing;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  imageSrc,
  currentUser,
  place,
  listing,
  id,
  user,
}) => {
  const { getByValue } = useCountries();

  const mins = listing?.time?.split(':');
  let showMins;
  if (mins) {
    showMins = +mins[0] * 60 + +mins[1];
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 border-none grid-cols-1  overflow-hidden relative h-auto sm:h-auto shadow-xl sm:min-h-[550px] min-h-[800px]  bg-black">
        
        <div className="w-full h-full sm:order-last relative sm:overflow-hidden">
          <Image
            fill
            src={imageSrc}
            className="w-full sm:w-full sm:h-full h-full object-cover"
            alt="im"
          />
        </div>
        <div className="flex order-last flex-col h-auto py-4 sm:py-20 pl-8 sm:pl-24">
          <div className="text-white font-bold text-4xl">{listing.title}</div>
          
          
          <div className="text-white mt-2 flex items-center gap-1 font-normal text-md">
            <HiOutlineLocationMarker size={15} /> {place}
          </div>
          <div className="text-white pt-8 text-lg">{listing.description}</div>
          <div className="flex flex-row gap-3 mt-3">
            {/* <div className="py-1 px-2 bg-white rounded-md outline-none border-none  shadow-md  text-neutral-800">
              {listing.featureOne}
            </div>
            <div className="py-1  px-2 bg-white rounded-md outline-none border-none  shadow-md  text-neutral-800">
              {listing.featureTwo}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingHead;
