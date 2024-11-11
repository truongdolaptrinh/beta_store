import Image from "next/image";
import React from "react";

const QCBannerProps = [
  { src: "/QCBanner/QCBanner1.jpg", alt: "qc1" },
  { src: "/QCBanner/QCBanner2.jpg", alt: "qc2" },
];

const QCBanner = () => {
  return (
    <div className="flex items-center gap-x-5 mt-[30px]">
      <div className="w-4/5">
        <Image
          src={QCBannerProps[0].src}
          alt={QCBannerProps[0].alt}
          width={0}
          height={0}
          sizes="80vw"
          style={{ width: "100%", maxHeight: "342px" }}
          className="rounded-lg"
        />
      </div>
      <div className="w-1/5">
        <Image
          src={QCBannerProps[1].src}
          alt={QCBannerProps[1].alt}
          width={0}
          height={0}
          sizes="20vw"
          style={{ width: "100%", height: "342px" }}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default QCBanner;
