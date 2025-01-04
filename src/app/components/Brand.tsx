import React from 'react';
import Image from 'next/image';

export default function Brands() {
  return (
    <div className='w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1366px] h-auto sm:h-[150px] md:h-[160px] lg:h-[170px] xl:h-[170px] 2xl:h-[170px] pl-4 sm:pl-16 md:pl-32 lg:pl-48 xl:pl-60 2xl:pl-72 pt-6 sm:pt-8 md:pt-10 lg:pt-12'>
    <Image 
        src="/images/grid-default/pic1.svg" 
        alt="" 
        width={750} 
        height={73} 
        className='' 
    />
</div>

  )
}