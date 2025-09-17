// News.tsx
import React from "react";
import noticeData from "../db/news.json";
import { GlobalNotice, NoticeProps } from "../db/type/common";

const notices: GlobalNotice = noticeData as GlobalNotice;

interface NewsProps extends NoticeProps {
  onClose: () => void;
}

const News: React.FC<NewsProps> = ({ leng, onClose }) => {
  return (
    <div className="bg-[#570E19]">
      <div className="max-w-1520 relative flex items-center justify-center text-white px-[20px] h-[60px] text-[20px] mx-auto">
        {notices[leng].noticeBar.message}
        <button onClick={onClose} className="absolute flex items-center justify-center right-[10px] p-[10px]">
          <img className="w-[12px] h-[12px]" src="/close.svg" alt="닫기 버튼"/>
        </button>
      </div>
    </div>
  );
};

export default News;
