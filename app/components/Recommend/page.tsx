import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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
    <div className="mx-3 space-y-4 gap-4">
      <div>
        <h2 className="text-xl font-semibold">Recommended</h2>
      </div>
      <div className="overflow-x-auto">
        <div className="flex items-center sm:grid sm:grid-cols-6 gap-[8px] sm:w-full">
          {products.map((product, index) => (
            <Card key={index} className=" sm:w-full">
              {product.src && product.alt && (
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={200}
                  height={200}
                  className="max-h-[150px] max-w-[130px] sm:max-h-[200px] sm:max-w-full rounded-t-xl"
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
    </div>
  );
};

export default Recommended;
