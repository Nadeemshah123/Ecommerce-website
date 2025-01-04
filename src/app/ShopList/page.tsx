
import React from 'react'
import Image from 'next/image';
import ECommerce from '@/app/components/Ecommerce'
import Shop from '@/app/components/Shop'
import Brands from '@/app/components/Brand'

function ShopList() {
    const images = [
        "/images/shop-list/01.png",
        "/images/shop-list/02.png",
        "/images/shop-list/03.png",
        "/images/shop-list/04.png",
        "/images/shop-list/05.png",
        "/images/shop-list/06.png",
        "/images/shop-list/07.png",
      ];

  return (
    <>
    <Shop/>
    <ECommerce/>
    
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 px-36">
      {images.map((src, index) => (
        <div key={index} className="w-full h-auto">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={1141} // You can change this based on image size
            height={254} // You can change this based on image aspect ratio
            className="w-full h-auto object-cover"
            layout="responsive"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>

    <Brands/>
    </>
  )
}

export default ShopList
