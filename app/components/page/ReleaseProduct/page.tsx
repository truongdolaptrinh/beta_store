import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import HeaderTitle from "../../ui/HeaderTitle/HeaderTitle";

const products = [
  {
    name: "NOV",
    date: "28",
    src: "/Shoes/banner.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "NOV",
    date: "28",
    src: "/Shoes/banner.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "NOV",
    date: "28",
    src: "/Shoes/banner.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "NOV",
    date: "28",
    src: "/Shoes/banner.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "NOV",
    date: "28",
    src: "/Shoes/banner.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "NOV",
    date: "28",
    src: "/Shoes/banner.jpg",
    alt: "Carousel Image 1",
  },
];

const ReleaseProduct = () => {
  return (
    <div className="space-y-4 gap-4 m-[12px] md:m-0">
      <HeaderTitle title="Already to sell !!" />
      <div className="flex items-center justify-between overflow-x-scroll md:overflow-visible gap-x-3 md:gap-x-0 scrollbar-none">
        {products.map((product, index) => (
          <Card key={index} className="w-full sm:w-[200px]">
            <CardContent className="pt-[4px] pl-3 pb-[8px]">
              <CardTitle
                className={`font-normal sm:text-lg mt-[7px] pl-[0px] flex items-center gap-x-2 `}
              >
                <div className="text-3xl border-r-2 px-2">{product.name}</div>{" "}
                <div className="text-2  xl">{product.date}</div>
              </CardTitle>
            </CardContent>
            {product.src && product.alt && (
              <Image
                src={product.src}
                alt={product.alt}
                width={999}
                height={999}
                className="max-h-[100px] sm:max-h-[130px] sm:max-w-[200px]"
              />
            )}
            <CardContent className="pt-[4px] pl-3 pb-[8px]">
              <CardTitle className="text-sm font-light sm:text-lg mt-[7px] pl-[0px]">
                abc
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReleaseProduct;
