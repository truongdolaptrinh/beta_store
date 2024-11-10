import * as React from "react";
import Image, { StaticImageData } from "next/image"; // Import StaticImageData from next/image
import banner1 from "../../../public/Banner/banner1.jpg"; // Import image directly
import banner2 from "../../../public/Banner/banner2.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import styles from "./Carousel.module.css";

// Define the Image interface
interface ImageData {
  src: string | StaticImageData; // Allow both string (URL) and StaticImageData (imported image)
  alt: string;
}

export function CarouselDemo() {
  // Create an array of images
  const images: ImageData[] = [
    {
      src: banner1, // Directly use the imported image here
      alt: "Carousel Image 1",
    },
    {
      src: banner2, // Directly use the imported image here
      alt: "Carousel Image 2",
    },
  ];

  return (
    <div className="flex justify-center z-10">
      <Carousel>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-3 ">
                {" "}
                {/* Adjust for different screen sizes */}
                <Image
                  src={image.src} // Using the imported image directly
                  alt={image.alt}
                  className={`${styles.carousel_img_mobile} w-full h-full object-cover object-center rounded-lg`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="sm:block hidden" />
        <CarouselNext className="sm:block hidden" />
      </Carousel>
      {/* <Image src={profilePic} alt="abc" /> */}
    </div>
  );
}
