import { CarouselDemo } from "./components/BannerCarousel/Carousel";
import HotProgram from "./components/SalePage/page";
import Recommended from "./components/RecommendedProducts/page";
import { Inter } from "next/font/google";
import PopularBrand from "./components/PopularBrand/page";
import QCBanner from "./components/QCBanner/page";
import FeedBacks from "./components/FeedBack/page";
import ReleaseProduct from "./components/ReleaseProduct/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="mx-auto max-w-[1350px] space-y-5 mb-10">
        <CarouselDemo />
        <Recommended />
        <Recommended />
        <QCBanner />
        <PopularBrand />
        <HotProgram />
        <ReleaseProduct />
        <Recommended />
        <FeedBacks />
      </div>
    </div>
  );
}
