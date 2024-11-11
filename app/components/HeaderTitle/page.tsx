import React from "react";
import { Lora } from "@next/font/google";

// Define the type for the props
interface HeaderTitleProps {
  title: string;
}

const lora = Lora({
  subsets: ["latin"], // optional, you can customize it
  weight: "400", // optional, set font weight if needed
});

// Define the component using the props
const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  return (
    <div className={`mx-3 ${lora.className}`}>
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
};

export default HeaderTitle;
