import Image from "next/image";
import * as React from "react";
import HeaderTitle from "../HeaderTitle/page";

const FeedBackImg = [
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 1" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 2" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 3" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 4" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 5" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 6" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 7" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 7" },
  { src: "/FeedBack/FB2.jpg", alt: "Feedback image 7" },
];

export default function FeedBacks() {
  const boxStyle =
    "bg-neutral-100 border-2 rounded-xl overflow-hidden relative group";

  return (
    <div className="space-y-4 gap-4">
      <div className="mx-3">
        <h2 className="text-3xl text-center font-semibold">
          <HeaderTitle title="FeedBack of Customer" />
        </h2>
      </div>
      <div className="grid md:grid-cols-3 auto-rows-[300px] gap-4">
        {FeedBackImg.map((item, i) => (
          <div key={i} className={boxStyle}>
            <div className="relative w-full h-full">
              <Image
                src={item.src}
                alt={item.alt}
                layout="responsive"
                width={400}
                height={250}
                className="rounded-lg transition-opacity duration-300 group-hover:opacity-60"
              />
              {/* Overlay text */}
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
