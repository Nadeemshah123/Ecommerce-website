import React from "react";
import Image from "next/image";

const TrendingProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      originalPrice: "$42.00",
      price: "$26.00",
      image: "/images/1st-page-images/t1.png",
    },
    {
      name: "Cantilever chair",
      originalPrice: "$42.00",
      price: "$26.00",
      image: "/images/1st-page-images/t2.png",
    },
    {
      name: "Cantilever chair",
      originalPrice: "$42.00",
      price: "$26.00",
      image: "/images/1st-page-images/t3.png",
    },
    {
      name: "Cantilever chair",
      originalPrice: "$42.00",
      price: "$26.00",
      image: "/images/1st-page-images/t4.png",
    },
  ];

  return (
    <section className=" py-10 px-6">
      <div className="max-w-7xl mx-auto px-24">
        <h2 className="text-2xl font-bold text-center text-[#1A0B5B] mb-8">
          Trending Products
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
                <div className="flex justify-center gap-2">
                <p className="text-sm text-[#babddd] line-through">{product.originalPrice}</p>
                <p className="text-lg font-bold text-[#151875] mt-2">
                  {product.price}
                </p>
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;