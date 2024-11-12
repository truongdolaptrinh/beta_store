import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import HeaderTitle from "../../ui/HeaderTitle/HeaderTitle";

const products = [
  {
    src: "/SaleBanner/sale2.jpg",
    alt: "Carousel Image 1",
  },
  {
    src: "/SaleBanner/sale2.jpg",
    alt: "Carousel Image 1",
  },
  {
    src: "/SaleBanner/sale2.jpg",
    alt: "Carousel Image 1",
  },
  {
    src: "/SaleBanner/sale2.jpg",
    alt: "Carousel Image 1",
  },
  {
    src: "/SaleBanner/sale2.jpg",
    alt: "Carousel Image 1",
  },
  {
    src: "/SaleBanner/sale2.jpg",
    alt: "Carousel Image 1",
  },
  {
    src: "/SaleBanner/sale2.jpg",
    alt: "Carousel Image 1",
  },
];

const HotProgram = () => {
  return (
    <div className=" space-y-4 gap-4 m-[12px] md:m-0">
      <HeaderTitle title="Sale for Customer" />
      <div className="overflow-x-auto scrollbar-none">
        <div className="flex gap-4 sm:w-full">
          {products.map((product, index) => (
            <Card key={index} className="w-full sm:w-[300px]">
              {product.src && product.alt && (
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={500}
                  height={500}
                  sizes="100vw"
                  className="max-h-[250px] max-w-[250px] sm:max-h-[300px] sm:max-w-[300px] rounded-xl"
                />
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotProgram;
