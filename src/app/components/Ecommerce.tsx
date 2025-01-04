import React from 'react';
import Image from 'next/image';

export default function ECommerce() {
  return (
    <div className=' xl:h-[180px] w-full h-auto pl-4 pt-8 sm:pl-12 sm:pt-12 md:pl-16 md:pt-16 lg:pl-20 lg:pt-20 xl:pl-48 xl:pt-24 2xl:pl-28 2xl:pt-28'>
        <Image 
          src="/images/grid-default/pic2.svg" 
          alt="E-Commerce Image" 
          width={950} 
          height={200} 
          className=" h-auto object-contain" 
        />
    </div>
  )
}