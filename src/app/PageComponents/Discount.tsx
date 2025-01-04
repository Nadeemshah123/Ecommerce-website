
import Image from "next/image";

import React from "react";
import Brands from '@/app/components/Brand'

const DiscountItem: React.FC = () => {
  return (
    <section className="py-14 bg-white ">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-0 ">
        {/* Left Content */}
        <div className="flex-1  px-40">
          <h2 className="text-[#151875] text-3xl font-bold mb-4">
            Discount Item
          </h2>
          <div className="flex text-[#151875] hover:text-[#FB2E86] space-x-3 text-sm mb-6">
            <span className="underline cursor-pointer">Wood Chair</span>
            <span className="underline cursor-pointer">Plastic Chair</span>
            <span className="underline cursor-pointer">Sofa Collection</span>
          </div>
          <h3 className="text-2xl font-bold text-[#151875] mb-4">
            20% Discount Of All Products
          </h3>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-500">
            <li>Material expose like metals</li>
            <li>Simple neutral colours</li>
            <li>Clear lines and geometric figures</li>
            <li>Material expose like metals</li>
          </ul>
          <button className="mt-8 bg-pink-500 text-white px-6 py-3 shadow-md hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <Image
            src="/images/1st-page-images/tortuga.png"
            alt="Chair" width={500} height={597}
            className="rounded-full shadow-md w-full max-w-sm mx-auto"
          />
        </div>

      </div>
      <div className="w-full mt-16">
          <Image
            src="/images/1st-page-images/banner.png"
            alt="Banner Image"
            width={1000}
            height={400}
            className="w-full xl:max-w-full-xl h-auto sm:max-h-48 md:max-h-56 lg:max-h-64"
          />
        </div>
      <Brands/>
    </section>
  
  );
};

export default DiscountItem;
