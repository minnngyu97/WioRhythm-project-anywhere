import React from "react";
import { SectionTitleItem } from "../db/type/common";

interface SectionTitleProps {
  data: SectionTitleItem;
}

export default function SectionTitle({ data }: SectionTitleProps) {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>
    </div>
  );
}
