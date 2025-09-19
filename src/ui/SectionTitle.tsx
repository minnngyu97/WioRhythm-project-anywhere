import React from "react";

interface SectionTitleProps {
  data: {
    title: string;
    subtitle: string;
  };
}

export default function SectionTitle({ data }: SectionTitleProps) {
  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold">{data.title}</h2>
      <p className="text-lg text-gray-600 mt-2">{data.subtitle}</p>
    </div>
  );
}
