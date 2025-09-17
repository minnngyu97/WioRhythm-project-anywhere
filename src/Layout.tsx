// Layout.tsx
import { useState } from "react";
import Hd from "./layout/Hd";
import Ft from "./layout/Ft";
import { LayoutProps } from "../db/type/common";
import News from "./ui/News";
import { useHideHeader } from "./hooks/useHideHeader";
import "./css/layout.css";

const Layout: React.FC<LayoutProps> = ({ children, data, setLeng, leng }) => {
  useHideHeader();

  const [showNews, setShowNews] = useState(true); // 👈 News 보이기 상태

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <header>
        {showNews && <News leng={leng} onClose={() => setShowNews(false)} />}
        <Hd data={data} setLeng={setLeng} />
      </header>

      <main>
        <div className={`${showNews ? "pt-[124px]" : "pt-[64px]"} overflow-hidden`}>
          {children}
        </div>
      </main>

      <Ft />
    </div>
  );
};

export default Layout;
