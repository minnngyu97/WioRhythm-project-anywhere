// Header.tsx
import { Link } from "react-router-dom";
import { HeaderProps } from "../db/type/common";

const Header: React.FC<HeaderProps> = ({ data, setLeng }) => {
  return (
    <nav className="w-full bg-white shadow-sm relative">
      <div className="max-w-1520 relative flex items-center justify-between px-[20px] mx-auto">
        {/* 로고 - 왼쪽 */}
        <h1 className="absolute top-1/2 -translate-y-1/2 left-[20px]">
          <Link to="/" className="flex h-[80px]">
            <img src="/logo.svg" alt="로고" className="" />
          </Link>
        </h1>

        {/* 메뉴 - 가운데 */}
        <ul className="w-full flex flex-wrap justify-center">
          {Object.entries(data).map(([key, item]) => (
            <li key={key}>
              <Link
                to={item.path}
                className="block h-[80px] text-gray-700 hover:text-blue-500 transition-colors py-[20px] px-[25px] text-[24px]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 언어 선택 - 오른쪽 */}
        <div className="flex gap-3 text-sm font-medium">
          <Link to="/en" onClick={() => setLeng("en")} className="hover:text-blue-500">
            EN
          </Link>
          <Link to="/" onClick={() => setLeng("kr")} className="hover:text-blue-500">
            KR
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
