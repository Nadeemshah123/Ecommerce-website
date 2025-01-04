import React from "react";
import Image from "next/image";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      code: "code - Y523201",
      price: "$42.00",
      image: "/images/1st-page-images/01.png",
    

    },
    {
      name: "Cantilever chair",
      code: "code - Y523201",
      price: "$42.00",
      image: "/images/1st-page-images/02.png",
    },
    {
      name: "Cantilever chair",
      code: "code - Y523201",
      price: "$42.00",
      image: "/images/1st-page-images/03.png",
    },
    {
      name: "Cantilever chair",
      code: "code - Y523201",
      price: "$42.00",
      image: "/images/1st-page-images/04.png",
    },
  ];

  return (
    <section className="bg-purple-50 py-10 px-6">
      <div className="max-w-7xl mx-auto px-24">
        <h2 className="text-2xl font-bold text-center text-[#1A0B5B] mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ width: "270px", height: "310px" }}
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  width={270}
                  height={310}
                  alt={product.name}
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#FB2E86]">
                  {product.name}
                </h3>
                <p className="text-sm text-[#151875]">{product.code}</p>
                <p className="text-lg font-bold text-[#151875] mt-2">
                  {product.price}
                </p>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#f8a5c9] text-white opacity-0 hover:opacity-100 flex items-center justify-center rounded-xl transition duration-300">
                <button className="py-2 px-4 bg-white text-[#FB2E86] font-bold rounded-md shadow-md">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;