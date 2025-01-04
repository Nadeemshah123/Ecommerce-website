import React from 'react';
import Image from 'next/image';

export default function Shop() {
  return (
    <div className=' sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1366px] 2xl:w-[1366px] h-auto sm:h-[150px] md:h-[160px] lg:h-[170px] xl:h-[150px] 2xl:h-[180px] pl-4 sm:pl-10 md:pl-20 lg:pl-32 xl:pl-44 2xl:pl-52 pt-8 sm:pt-12 md:pt-14 lg:pt-16 bg-[#F6F5FF]'>
        <Image 
          src="/images/grid-default/pic3.png" 
          alt="" 
          width={180} 
          height={44} 
          className='' 
        />
    </div>
  )
}