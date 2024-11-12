import * as React from "react";
import Image from "next/image"; // Import StaticImageData from next/image

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    src: "/Banner/banner1.jpg", // Directly use the imported image here
    alt: "Carousel Image 1",
  },
  {
    src: "/Banner/banner2.jpg", // Directly use the imported image here
    alt: "Carousel Image 2",
  },
];

export function CarouselDemo() {
  // Create an array of images

  return (
    <div className="flex justify-center z-10 sm:h-220px sm:max-h-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-3 ">
                {" "}
                <Image
                  src={image.src} // Using the imported image directly
                  alt={image.alt}
                  sizes="100vw"
                  style={{
                    width: "100%",
                  }}
                  width={500}
                  height={300}
                  className={`w-full object-cover object-center rounded-lg h-[130px] md:h-full`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="sm:block hidden" />
        <CarouselNext className="sm:block hidden" />
      </Carousel>
    </div>
  );
}
