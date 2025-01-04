import React from 'react'
import Image from "next/image";

function Unique() {
  return (
    <div>

<section className="px-28 bg-[#F2F0FF]  h-[579px]">
        <div className="p-[64px]  flex flex-wrap md:flex-nowrap items-center gap-10 px-6">
          <div className="flex-1">
            {/* Product Image */}
            <Image
              src="/images/1st-page-images/couch.png"
              alt="Product" width={500} height={500}
              className="rounded-lg shadow-md"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#151875] mb-4">
              Unique Features Of Latest & <br/>Trending Products
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li>
                All frames constructed with hardwood solids and laminates.
              </li>
              <li>
                Reinforced with double wood dowels, glue, screws, nails at
                corner blocks, and machine nails.
              </li>
              <li>Arms, backs, and seats are structurally reinforced.</li>
            </ul>
            <div className="mt-8">
              <button className="bg-[#FB2E86] text-white py-2 px-6 rounded shadow-md hover:bg-[#e23aa2]">
                Add To Cart
              </button>
              <p className="mt-2 text-sm text-[#151875]">
                B&B Italian Sofa<br/>$32.00
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Unique