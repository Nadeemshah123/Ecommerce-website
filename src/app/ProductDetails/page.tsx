
import Image from 'next/image'

import React from 'react'
import Brands from '@/app/components/Brand'

export default function ProductDetails() {
  return (
    <>
     <div className='sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1366px] 2xl:w-[1366px] h-auto sm:h-[150px] md:h-[160px] lg:h-[170px] xl:h-[150px] 2xl:h-[180px] pl-4 sm:pl-10 md:pl-20 lg:pl-32 xl:pl-44 2xl:pl-52 pt-8 sm:pt-12 md:pt-14 lg:pt-16 bg-[#F6F5FF]'>
                  <Image 
                    src="/images/product-details/p1.png" 
                    alt="" 
                    width={180} 
                    height={44} />
     </div>

     
    <div className="bg-gray-50 py-10 px-24">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 shadow-md">
          {/* Images */}
          <div className=" flex flex-row-reverse gap-4">
            <div className="aspect-w-1 aspect-h-1">
              <Image
                src="/images/product-details/hero.png"
                alt="Main product image"
                width={250}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col space-y-2">
              {["/images/product-details/01.png", "/images/product-details/02.png", "/images/product-details/03.png"].map((img, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1">
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={100}
                    height={100}
                    className="object-cover cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-semibold mb-4 text-[#0D134E]">Playwood arm chair</h1>
            <div className="text-yellow-500 flex items-center mb-2">
              {"⭐⭐⭐⭐⭐"}<span className='text-[#0D134E] ml-2'>(22)</span>
            </div>
            <p className="text-lg text-gray-700 mb-2">
              $32.00 <span className="font-semibold text-pink-500 line-through pl-4">$32.00</span>
            </p>
            <p className="text-gray-500 mb-6">
            Color <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <div className="mt-6">
              <p className="text-lg text-[#0D134E]">
                <span className="font-normal">Categories:</span><br/>
                <span className="font-normal">Tags</span><br/>
                <span className="font-normal">Share</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-10">
          <div className="flex space-x-6 border-b text-[#0D134E]">
            {["Description", "Additional Info", "Reviews", "Video"].map((tab) => (
              <button
                key={tab}
                className="py-2 px-4 text-gray-700 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <h1 className='text-2xl font-semibold text-[#0D134E]'>Varius Tempor.</h1>
            <p className="text-gray-700 pt-4">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </p>

            <h1 className='text-2xl font-semibold text-[#0D134E] mt-8'>More details</h1>
            <ul className="mt-4 space-y-2 text-gray-600">
              {[
                "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.",
                "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
                "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .",
                "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr ."
              ].map((detail, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-600">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <h2 className="text-2xl font-semibold mb-4 text-[#0D134E]">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[#0D134E]">
            {[
              { name: "Mens Fashion Wear", img: "/images/product-details/a1.png", price: "$43.00" },
              { name: "Women Fashion", img: "/images/product-details/a2.png", price: "$67.00" },
              { name: "Wolx Dummy Fashion", img: "/images/product-details/a3.png", price: "$67.00" },
              { name: "Top Wall Digital Clock", img: "/images/product-details/a4.png", price: "$51.00" },
            ].map((product, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <div className="aspect-w-1 aspect-h-1">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-2 text-sm font-semibold">{product.name}</h3>
                <p className="text-[#0D134E] font-medium">{product.price}</p>
              </div>
             
            ))}
           
          </div>
        </div>
      </div>
      <Brands/>
    </div>
      
    </>
  )
}
