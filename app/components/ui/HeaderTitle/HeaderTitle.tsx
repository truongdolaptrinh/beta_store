import React from "react";

export interface HeaderTitleProps {
  title: string;
}

export default function HeaderTitle({ title }: HeaderTitleProps) {
  return (
    <div className={`mx-3 `}>
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
}
