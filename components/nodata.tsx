'use client';

import { toTitleCase } from '@/lib/utils';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NoDataImage from "../public/no-data.svg";


const NoData = () => {
  const pathname = usePathname();
  return (
    <div>
      <h2 className="text-2xl font-semibold ml-10">{toTitleCase(pathname.substring(1))}</h2>
      <div className="flex flex-col items-center justify-center mt-10">
        <Image src={NoDataImage} width="300" height="300" alt="No Data" />
        <p>No Data Found</p>
      </div>
    </div>
  )
}

export default NoData