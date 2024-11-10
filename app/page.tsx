import { CarouselDemo } from "./components/Carousel/Carousel";
import Recommended from "./components/Recommend/page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="mx-auto max-w-[1300px] space-y-5 mb-10">
        <CarouselDemo />
        <Recommended />
        <Recommended />
        <Recommended />
        <Recommended />
        <Recommended />
        <Recommended />
      </div>
    </div>
  );
}
