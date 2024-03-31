'use client';

import dynamic from 'next/dynamic';
import useCountries from '@/app/hooks/useCountries';
import { IconType } from 'react-icons';
import Avatar from '../Avatar';
import { SafeUser } from '@/app/types';
import ListingCategory from './ListingCategory';

const Map = dynamic(() => import('../Map'), { ssr: false });

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  featureOne?: string | null;
  featureTwo?: string | null;

  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  locationValue,
  featureOne,
  featureTwo,
}) => {
  const { getByValue } = useCountries();

  const coordinates = locationValue.split(',').map((c) => parseFloat(c)) as [number, number];
  return (
    <div className="col-span-4 flex flex-col z-10">
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;