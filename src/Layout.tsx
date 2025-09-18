// Layout.tsx
import { useState } from "react";
import Hd from "./layout/Hd";
import Ft from "./layout/Ft";
import { LayoutProps } from "./db/type/common";
import News from "./ui/News";
import { useHideHeader } from "./hooks/useHideHeader";
import "./css/layout.css";

const Layout: React.FC<LayoutProps> = ({ children, data, setLeng, leng }) => {
  useHideHeader();

  const [showNews, setShowNews] = useState(true); // 👈 News 보이기 상태

  return (
    <div className="">
      <header>
        {showNews && <News leng={leng} onClose={() => setShowNews(false)} />}
        <Hd data={data} setLeng={setLeng} />
      </header>

      <main>
        <div className={`${showNews ? "pt-[140px]" : "pt-[80px]"} overflow-hidden`}>
          {children}
        </div>
      </main>

      <Ft />
    </div>
  );
};

export default Layout;
