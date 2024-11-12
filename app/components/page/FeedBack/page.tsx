import Image from "next/image";
import * as React from "react";
import HeaderTitle from "../../ui/HeaderTitle/HeaderTitle";

const FeedBackImg = [
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 1" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 2" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 3" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 4" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 5" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 6" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 7" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 8" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 9" },
];

export default function FeedBacks() {
  const boxStyle =
    "bg-neutral-100 border-2 rounded-xl overflow-hidden relative group";

  return (
    <div className="space-y-4 gap-4 m-4 md:m-0">
      <div className="mx-3 text-center">
        <HeaderTitle title="Feedback of Customer" />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[300px]">
        {FeedBackImg.map((item, i) => (
          <div
            key={i}
            className={`${boxStyle} ${
              i === 8 ? "col-span-2 sm:col-span-1" : ""
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.src}
                alt={item.alt}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                width={500}
                height={300}
                className="rounded-lg transition-opacity duration-300 group-hover:opacity-60 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-semibold">See Product</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
