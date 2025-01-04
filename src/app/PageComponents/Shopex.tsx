import React from "react";
import Image from "next/image";

const Shopex: React.FC = () => {
  // Define images for the cards
  const images = [
    "/images/1st-page-images/a1.png",
    "/images/1st-page-images/a2.png",
    "/images/1st-page-images/a3.png",
    "/images/1st-page-images/a4.png",
   ] 

  return (
    <div className="min-h-screen">
      {/* Upper Section */}
      <section className="text-center py-16 px-10">
        <h2 className="text-3xl font-bold text-[#151875] mb-10">
          What Shopex Offer!
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white w-[200px] shadow-lg p-6 rounded-md max-w-xs text-center"
            >
              <div className="mb-4">
                {/* Image Component */}
                <Image
                  src={image}
                  alt={`Shopex Offer ${index + 1}`}
                  width={64} 
                  height={64} 
                  className="mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#151875]">
                24/7 Support
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shopex;