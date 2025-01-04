
import React from 'react'
import Image from 'next/image'
import Brands from '@/app/components/Brand'

function NotFoundPage() {
  return (
    <div>

    <div className='sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1366px] 2xl:w-[1366px] h-auto sm:h-[150px] md:h-[160px] lg:h-[170px] xl:h-[150px] 2xl:h-[180px] pl-4 sm:pl-10 md:pl-20 lg:pl-32 xl:pl-40 2xl:pl-52 pt-8 sm:pt-12 md:pt-14 lg:pt-16 bg-[#F6F5FF]'>
        <Image 
          src="/images/not-found/pic4.png" 
          alt="" 
          width={180} 
          height={44} 
          className='' 
        />
    </div>

    <div className='w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1366px] h-auto sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[550px] flex items-center justify-center pl-4 sm:pl-16 md:pl-24 lg:pl-40 xl:pl-[250px] 2xl:pl-[300px] px-4 sm:px-16 md:px-24 lg:px-32'>
    <Image 
        src="/images/not-found/pic5.png" 
        alt="" 
        width={550} 
        height={300} 
        className='' 
    />
    </div>

    <Brands/>

    </div>
  )
}

export default NotFoundPage
