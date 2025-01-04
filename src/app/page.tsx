import Image from "next/image";
import HeroSection from "./PageComponents/Hero";
import FeaturedProducts from "./PageComponents/Featured";
import LatestProducts from "./PageComponents/Latest";
import Shopex from "./PageComponents/Shopex";
import Unique from "./PageComponents/Unique";
import TrendingProducts from "./PageComponents/Trending";
import DiscountItem from "./PageComponents/Discount";
export default function Home() {
  return (
      <>
   <main  className="lg:w-[1366px]">
    <HeroSection/>
    <FeaturedProducts/>
    <LatestProducts/>
    <Shopex/>
    <Unique/>
    <TrendingProducts/>
    <DiscountItem/>

   </main>

   </>
  );
}
