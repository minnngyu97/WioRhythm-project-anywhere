// Global.tsx
import { useState } from "react";
import App from "./App";

import sqldata from "./db/navi.json";

// 타입
import { GlobalData, LanguageData } from "../db/type/common";

export default function Global() {
  const [leng, setLeng] = useState<"kr" | "en">("kr");

  // JSON의 타입을 GlobalData로 지정
  const globaldata: GlobalData = sqldata as GlobalData;

  // 현재 선택된 언어 데이터
  const currentData: LanguageData = globaldata[leng];

  return (
    <div>
      <App data={currentData} leng={leng} setLeng={setLeng} />
    </div>
  );
}
