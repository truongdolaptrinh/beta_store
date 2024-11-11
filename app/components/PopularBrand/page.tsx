import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const products = [
  {
    name: "Air Jordan 1",
    src: "/Shoes/Nike/banner1.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "Air Jordan 2",
    src: "/Shoes/Nike/banner1.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "Air Jordan 3",
    src: "/Shoes/Nike/banner2.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "Air Jordan 4",
    src: "/Shoes/Nike/banner3.jpg",
    alt: "Carousel Image 1",
  },
  {
    name: "Air Jordan 5",
    src: "/Shoes/Nike/banner4.jpg",
    alt: "Carousel Image 1",
  },
];

const PopularBrand = () => {
  return (
    <div className=" space-y-4 gap-4">
      <div className="mx-3">
        <h2 className="text-xl font-semibold">PopularBrand</h2>
      </div>
      {/* <div className="overflow-x-auto"> */}
      <div className="flex items-center justify-between">
        {products.map((product, index) => (
          <Card key={index} className="w-full max-w-[240px]">
            {product.src && product.alt && (
              <Image
                src={product.src}
                alt={product.alt}
                width={240}
                height={160}
                className="rounded-t-xl max-h-[160px]"
              />
            )}
            <CardContent className="pt-[3px] pl-3 pb-[8px]">
              <CardTitle className="text-[13px] font-normal sm:text-lg mt-[7px] pl-[0px]">
                {product.name}
              </CardTitle>
              <p className="text-gray-700 text-[20px] font-bold"></p>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default PopularBrand;
