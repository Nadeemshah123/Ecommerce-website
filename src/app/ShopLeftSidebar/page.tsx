import ECommerce from '@/app/components/Ecommerce'
import Image from "next/image";
import Brands from '@/app/components/Brand'

export default function ShopLeftSidebar() {
    return (
<>
          <div className=' sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1366px] 2xl:w-[1366px] h-auto sm:h-[150px] md:h-[160px] lg:h-[170px] xl:h-[150px] 2xl:h-[180px] pl-4 sm:pl-10 md:pl-20 lg:pl-32 xl:pl-44 2xl:pl-52 pt-8 sm:pt-12 md:pt-14 lg:pt-16 bg-[#F6F5FF]'>
              <Image 
                src="/images/shop-left-sidebar/pic1.png" 
                alt="" 
                width={180} 
                height={44} 
                className='' 
              />
          </div>
        
      <div className="bg-slate-50 min-h-screen p-4">
        
        <ECommerce/>

        {/* Main Container */}
        <div className="max-w-[1366px] mx-auto grid grid-cols-12 gap-6 px-4 lg:px-44">
          {/* Sidebar Section */}
          <aside className="col-span-12 lg:col-span-3 bg-white p-4 rounded-md shadow-sm">
            {/* Product Brand */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2 text-[#151875] underline">Product Brand</h3>
              <ul className="space-y-4 text-sm text-[#7E81A2]">
                <li><input type="checkbox" /> <span>Coaster Furniture</span></li>
                <li><input type="checkbox" /> <span>Fusion Dot High Fashion</span></li>
                <li><input type="checkbox" /> <span>Unique Furnitture Restor</span></li>
                <li><input type="checkbox" /> <span>Dream Furnitture Flipping</span></li>
                <li><input type="checkbox" /> <span>Young Repurposed</span></li>
                <li><input type="checkbox" /> <span>Green DIY furniture</span></li>
              </ul>
            </div>
            {/* Discount Offer */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2 text-[#151875] underline">Discount Offer</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li><input type="checkbox" /> <span>20% Cashback</span></li>
                <li><input type="checkbox" /> <span>5% Cashback Offer</span></li>
                <li><input type="checkbox" /> <span>25% Discount Offer</span></li>
              </ul>
            </div>
            {/* Rating Item */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2 text-[#151875] underline">Rating Item</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li><input type="checkbox" /> ⭐⭐⭐⭐☆ <span className="text-black">(2341)</span></li>
                <li><input type="checkbox" /> ⭐⭐⭐☆☆ <span className="text-black">(1726)</span></li>
                <li><input type="checkbox" /> ⭐⭐☆☆☆ <span className="text-black">(258)</span></li>
                <li><input type="checkbox" /> ⭐⭐☆☆☆ <span className="text-black">(25)</span></li>
              </ul>
            </div>
            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2 text-[#151875] underline">Categories</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li><input type="checkbox" /> Prestashop</li>
                <li><input type="checkbox" /> Magento</li>
                <li><input type="checkbox" /> Bigcommerce</li>
                <li><input type="checkbox" /> osCommerce</li>
                <li><input type="checkbox" /> 3dcart</li>
                <li><input type="checkbox" /> Bags</li>
                <li className="pl-4"> Accessories</li>
                <li className="pl-4"> Jewellery</li>
                <li><input type="checkbox" /> Watches</li>
              </ul>
            </div>
            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2 underline">Price Filter</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                 <li><input type="checkbox" />$0.00 - $150.00</li>
                 <li><input type="checkbox" />$150.00 - $350.00</li>
                 <li><input type="checkbox" />$150.00 - $504.00</li>
                 <li><input type="checkbox" />$450.00 +</li> 
              </ul>
            </div>
            {/* Filter by Color */}
            <div>
              <h3 className="font-semibold text-lg mb-2 underline">Filter by Color</h3>
              <div className="space-y-4">
                <div className="flex gap-8 text-xs">
                <div className="w-6 h-6 pl-6 bg-[#5E37FF] rounded-full pt-1">Blue</div>
                <div className="w-6 h-6 pl-6 bg-[#FF9437] rounded-full pt-1">Orange</div>
                <div className="w-6 h-6 pl-6 bg-[#FFBF95] rounded-full pt-1">Brown</div>
                </div>
                <div className="flex gap-8 text-xs">
                <div className="w-6 h-6 pl-6 bg-[#33D221] rounded-full pt-1">Green</div>
                <div className="w-6 h-6 pl-6 bg-[#E248FF] rounded-full pt-1">Purple</div>
                <div className="w-6 h-6 pl-6 bg-[#26CBFF] rounded-full pt-1">Sky</div>
                </div>
              </div>
            </div>
          </aside>


           {/* Product Cards in Single Column */}
  <div className="flex flex-col text-[#111C85] gap-4 lg:w-[650px]">
    {/* Product Card 1 */}
    <div className="flex flex-col md:flex-row bg-white">
  <div className="w-full md:w-1/3">
    <Image
      src="/images/shop-left-sidebar/p1.png"
      alt="Product 1"
      width={300}
      height={300}
      className="w-full h-auto object-cover"
    />
  </div>
  <div className="w-full md:w-2/3 p-4">
    <h2 className="font-semibold text-lg mb-1">Dictum morbi</h2>
    <div className="flex gap-4">
      <p className="font-bold text-[#FF2AAA]">$26.00</p>
      <p className="text-yellow-500 mb-1">⭐⭐⭐⭐☆</p>
    </div>
    <p className="text-gray-500 text-sm mb-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
    </p>
  </div>
</div>



    {/* Product Card 2 */}
    <div className="flex flex-col md:flex-row bg-white">
      <Image
        src="/images/shop-left-sidebar/p2.png"
        alt="Product 2"
        width={300} height={300}
        className="w-full md:w-1/3  h-auto object-cover"
      />
      <div className="w-full md:w-2/3 p-4">
        <h2 className="font-semibold text-lg mb-1">Sodales sit</h2>
        <div className="flex gap-4">
        <p className="font-bold text-[#FF2AAA]">$26.00</p>
        <p className="text-yellow-500 mb-1">⭐⭐⭐⭐☆</p>
        </div>
        <p className="text-gray-500 text-sm mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
      </div>
    </div>

    {/* Product Card 3 */}
    <div className="flex flex-col md:flex-row bg-white">
      <Image
        src="/images/shop-left-sidebar/p3.png"
        alt="Product 3"
        width={300} height={300}
        className="w-full md:w-1/3 h-auto object-cover"
      />
      <div className="w-full md:w-2/3 p-4">
        <h2 className="font-semibold text-lg mb-1">Nibh varius</h2>
        <div className="flex gap-4">
        <p className="font-bold text-[#FF2AAA]">$26.00</p>
        <p className="text-yellow-500 mb-1">⭐⭐⭐⭐☆</p>
        </div>
        <p className="text-gray-500 text-sm mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
      </div>
    </div>

        {/* Product Card 4 */}
    <div className="flex flex-col md:flex-row bg-white">
      <Image
        src="/images/shop-left-sidebar/p4.png"
        alt="Product 4"
        width={300} height={300}
        className="w-full md:w-1/3 h-auto object-cover"
      />
      <div className="w-full md:w-2/3 p-4">
        <h2 className="font-semibold text-lg mb-1">Mauris quis</h2>
        <div className="flex gap-4">
        <p className="font-bold text-[#FF2AAA]">$26.00</p>
        <p className="text-yellow-500 mb-1">⭐⭐⭐⭐☆</p>
        </div>
        <p className="text-gray-500 text-sm mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
      </div>
    </div>

     {/* Product Card 5 */}
     <div className="flex flex-col md:flex-row bg-white">
      <Image
        src="/images/shop-left-sidebar/p5.png"
        alt="Product 5"
        width={300} height={300}
        className="w-full md:w-1/3 h-auto object-cover"
      />
      <div className="w-full md:w-2/3 p-4">
        <h2 className="font-semibold text-lg mb-1">Morbi sagittis</h2>
        <div className="flex gap-4">
        <p className="font-bold text-[#FF2AAA]">$26.00</p>
        <p className="text-yellow-500 mb-1">⭐⭐⭐⭐☆</p>
        </div>
        <p className="text-gray-500 text-sm mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
      </div>
    </div>

    {/* Product Card 6 */}
    <div className="flex flex-col md:flex-row bg-white">
      <Image
        src="/images/shop-left-sidebar/p6.png"
        alt="Product 6"
        width={300} height={300}
        className="w-full md:w-1/3 h-auto object-cover"
      />
      <div className="w-full md:w-2/3 p-4">
        <h2 className="font-semibold text-lg mb-1">Ultricies venenatis</h2>
        <div className="flex gap-4">
        <p className="font-bold text-[#FF2AAA]">$26.00</p>
        <p className="text-yellow-500 mb-1">⭐⭐⭐⭐☆</p>
        </div>
        <p className="text-gray-500 text-sm mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
      </div>
    </div>

    {/* Product Card 7 */}
    <div className="flex flex-col md:flex-row bg-white">
      <Image
        src="/images/shop-left-sidebar/p7.png"
        alt="Product 7"
        width={300} height={300}
        className="w-full md:w-1/3 h-auto object-cover"
      />
      <div className="w-full md:w-2/3 p-4">
        <h2 className="font-semibold text-lg mb-1">Scelerisque dignissim</h2>
        <div className="flex gap-4">
        <p className="font-bold text-[#FF2AAA]">$26.00</p>
        <p className="text-yellow-500 mb-1">⭐⭐⭐⭐☆</p>
        </div>
        <p className="text-gray-500 text-sm mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
        </p>
      </div>
    </div>
    
  </div>  
        </div>
        <Brands/>  
      </div>
      </>
    );
  }
  