import Image from "next/image";
import React from "react";

const QCBannerProps = [
  { src: "/QCBanner/QCBanner1.jpg", alt: "qc1" },
  { src: "/QCBanner/QCBanner2.jpg", alt: "qc2" },
];

const QCBanner = () => {
  return (
    <div className="m-[12px] md:m-0">
      <div className="flex flex-col sm:flex-row items-center gap-5 ">
        <div className="w-full sm:w-4/5">
          <Image
            src={QCBannerProps[0].src}
            alt={QCBannerProps[0].alt}
            width={0}
            height={0}
            sizes="(max-width: 640px) 100vw, 80vw"
            style={{ width: "100%", maxHeight: "342px" }}
            className="rounded-lg"
          />
        </div>
        <div className="w-full sm:w-1/5">
          <Image
            src={QCBannerProps[1].src}
            alt={QCBannerProps[1].alt}
            width={0}
            height={0}
            sizes="(max-width: 640px) 100vw, 20vw"
            style={{ width: "100%", height: "342px" }}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default QCBanner;
