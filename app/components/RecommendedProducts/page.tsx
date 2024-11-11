import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import style from "./page.module.css";
import HeaderTitle from "../HeaderTitle/page";

const products = [
  {
    name: "Air Jordan 1",
    price: "120",
    src: "/Shoes/Nike/banner1.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "Air Jordan 2",
    price: "130",
    src: "/Shoes/Nike/banner1.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "Air Jordan 3",
    price: "140",
    src: "/Shoes/Nike/banner2.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "Air Jordan 4",
    price: "150",
    src: "/Shoes/Nike/banner3.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "Air Jordan 5",
    price: "160",
    src: "/Shoes/Nike/banner4.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "Air Jordan 6",
    price: "170",
    src: "/Shoes/Nike/banner5.jpg",
    alt: "Carousel Image 1",
  },
];

const Recommended = () => {
  return (
    <div className=" space-y-4 gap-4">
      <HeaderTitle title="Recommended for You" />
      <div className="flex items-center justify-between">
        {products.map((product, index) => (
          <Card key={index} className="w-full sm:w-[200px]">
            {product.src && product.alt && (
              <Image
                src={product.src}
                alt={product.alt}
                width={200}
                height={200}
                className="max-h-[150px] max-w-[130px] sm:max-h-[200px] sm:max-w-[200px] rounded-t-xl"
              />
            )}
            <CardContent className="pt-[4px] pl-3 pb-[8px]">
              <CardTitle className="text-[13px] font-normal sm:text-lg mt-[7px] pl-[0px]">
                {product.name}
              </CardTitle>
              <p className="text-gray-700 text-[20px] font-bold">
                ${product.price}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
