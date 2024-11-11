import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import HeaderTitle from "../HeaderTitle/page";

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
    <div className=" space-y-4 gap-4">
      <HeaderTitle title="Sale for Customer" />
      <div className="overflow-x-auto scrollbar-none">
        <div className="flex gap-4 sm:w-full">
          {products.map((product, index) => (
            <Card key={index} className="w-full sm:w-[200px] relative">
              {product.src && product.alt && (
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={200}
                  height={200}
                  className="max-h-[150px] max-w-[130px] sm:max-h-[250px] sm:max-w-[200px] rounded-xl"
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
