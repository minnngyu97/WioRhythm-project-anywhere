// Header.tsx
import { Link } from "react-router-dom";
import { HeaderProps } from "../db/type/common";

const Header: React.FC<HeaderProps> = ({ data, setLeng }) => {
  return (
    <nav className="w-full bg-white shadow-sm relative">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* 로고 - 왼쪽 */}
        <h1 className="text-xl font-bold">
          <Link to="/">
            <img src="/logo.svg" alt="로고" className="h-10" />
          </Link>
        </h1>

        {/* 메뉴 - 가운데 */}
        <ul className="flex gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {Object.entries(data).map(([key, item]) => (
            <li key={key}>
              <Link
                to={item.path}
                className="text-gray-700 hover:text-blue-500 transition-colors"
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
