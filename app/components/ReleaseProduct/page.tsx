import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import HeaderTitle from "../HeaderTitle/page";
import { Playfair_Display } from "@next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"], // optional, you can customize it
  weight: "400", // optional, set font weight if needed
});

const products = [
  {
    name: "NOV",
    date: "28",
    src: "/Shoes/Nike/banner1.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "NOV",
    date: "28",
    src: "/Shoes/Nike/banner1.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "NOV",
    date: "28",
    src: "/Shoes/Nike/banner1.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "NOV",
    date: "28",
    src: "/Shoes/Nike/banner1.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "NOV",
    date: "28",
    src: "/Shoes/Nike/banner1.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "NOV",
    date: "28",
    src: "/Shoes/Nike/banner1.jpg",
    alt: "Carousel Image 1",
  },
];

const ReleaseProduct = () => {
  return (
    <div className="space-y-4 gap-4">
      <HeaderTitle title="Already to sell !!" />
      <div className="flex items-center justify-between">
        {products.map((product, index) => (
          <Card key={index} className="w-full sm:w-[200px]">
            <CardContent className="pt-[4px] pl-3 pb-[8px]">
              <CardTitle
                className={`font-normal sm:text-lg mt-[7px] pl-[0px] flex items-center gap-x-2 ${playfair.className}`}
              >
                <div className="text-3xl border-r-2 px-2">{product.name}</div>{" "}
                <div className="text-2  xl">{product.date}</div>
              </CardTitle>
            </CardContent>
            {product.src && product.alt && (
              <Image
                src={product.src}
                alt={product.alt}
                width={200}
                height={100}
                className="max-h-[150px] max-w-[130px] sm:max-h-[150px] sm:max-w-[200px]"
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
