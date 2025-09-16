import Hd from "./layout/Hd";
import Ft from "./layout/Ft";
import Notice from "./ui/Notice";
import { LayoutProps } from "../db/type/common";

const Layout: React.FC<LayoutProps> = ({ children, data, setLeng, leng }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Notice leng={leng} />
      {/* 헤더 */}
      <Hd data={data} setLeng={setLeng} />

      {/* 타이틀 */}
      {/* <Title /> */}

      {/* 메인 컨텐츠 + 퀵메뉴 */}
      <div className="flex flex-wrap items-start py-6 gap-6 overflow-hidden">
        <div className="flex-grow">{children}</div>
      </div>

      {/* 푸터 */}
      <Ft />
    </div>
  );
};

export default Layout;
