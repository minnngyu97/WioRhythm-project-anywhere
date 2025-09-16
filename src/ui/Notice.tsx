import React from "react";
import noticeData from "../db/news.json";
import { GlobalNotice, NoticeProps } from "../db/type/common";

const notices: GlobalNotice = noticeData as GlobalNotice;

const Notice: React.FC<NoticeProps> = ({ leng }) => {
  return (
    <div
      className="
        bg-[#570E19] text-white p-[20px]
        font-normal text-[20px]
        leading-[100%] tracking-normal text-center
      "
    >
      {notices[leng].noticeBar.message}
      <button><img src="" alt="" /></button>
    </div>
  );
};

export default Notice;
