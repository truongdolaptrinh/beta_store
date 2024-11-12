import { CarouselDemo } from "./components/page/BannerCarousel/Carousel";
import Recommended from "./components/page/RecommendedProducts/page";
import PopularBrand from "./components/page/PopularBrand/page";
import FeedBacks from "./components/page/FeedBack/page";
import QCBanner from "./components/page/QCBanner/page";
import HotProgram from "./components/page/SalePage/page";
import ReleaseProduct from "./components/page/ReleaseProduct/page";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1350px] space-y-5 mb-10">
      <CarouselDemo />
      <Recommended />
      <QCBanner />
      <PopularBrand />
      <HotProgram />
      <ReleaseProduct />
      <FeedBacks />
    </div>
  );
}
