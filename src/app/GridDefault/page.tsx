import Image from 'next/image';
import ECommerce from '@/app/components/Ecommerce'
import Shop from '@/app/components/Shop'
import Brands from '@/app/components/Brand'

const images = [
  '/images/grid-default/(12).svg',
  '/public/images/grid-default/(1).svg',
  '/images/grid-default/(2).svg',
  '/images/grid-default/(3).svg',
  '/images/grid-default/(4).svg',
  '/images/grid-default/(5).svg',
  '/images/grid-default/(6).svg',
  '/images/grid-default/(7).svg',
  '/images/grid-default/(8).svg',
  '/images/grid-default/(9).svg',
  '/images/grid-default/(10).svg',
  '/images/grid-default/(11).svg',
];

const GridDefault = () => {
  return (
    <>
    <Shop/>
    <ECommerce/>
   
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-4 px-32">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-auto">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="responsive"
              width={270} // Width of the image
              height={363} // Height of the image
              className="object-cover rounded-lg"
            />
            
          </div>
          
        ))}
      </div>
    </div>
    <Brands/>
    </>
  );
};

export default GridDefault;