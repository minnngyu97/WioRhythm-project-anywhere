import { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderProps } from "../db/type/common";
import { useLangSelector } from "../hooks/useLangSelector";
import "../css/layout.css";

const Header: React.FC<HeaderProps> = ({ data, setLeng }) => {
  useLangSelector();
  const [currentLang, setCurrentLang] = useState("kr");

  const languages = [
    { code: "kr", label: "KR", path: "/" },
    { code: "en", label: "EN", path: "/en" },
    // { code: "cn", label: "CN", path: "/cn" },
  ];

  const handleChange = (lang: string) => {
    setCurrentLang(lang);
    setLeng(lang);
  };

  return (
    <nav className="w-full bg-white shadow-sm relative">
      <div className="max-w-1520 relative flex items-center justify-between px-[20px] mx-auto">
        <h1 className="absolute top-1/2 -translate-y-1/2 left-[20px]">
          <Link to="/" className="flex h-[80px]">
            <img src="/logo.svg" alt="로고" />
          </Link>
        </h1>

        <ul className="w-full flex flex-wrap justify-center">
          {Object.entries(data).map(([key, item]) => (
            <li key={key}>
              <Link
                to={item.path}
                className="flex items-center h-[80px] text-gray-700 hover:text-blue-500 transition-colors py-[20px] px-[25px] text-[24px]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute right-[20px] h-[80px] flex items-center gap-4">
          <ul className="flex gap-3">
            <li><img src="/search.svg" alt="검색 아이콘" /></li>
            <li><a href="/"><img src="/login.svg" alt="로그인 아이콘" /></a></li>
            <li><a href="/"><img src="/cart.svg" alt="장바구니 아이콘" /></a></li>
          </ul>

          <div className="langBtnWrap">
            <button type="button" className="langBtn">
              {currentLang.toUpperCase()}
            </button>
            <ul className="langBtnList flex gap-3 text-sm font-medium">
              {languages.map(({ code, label, path }) => (
                <li key={code}>
                  <Link
                    to={path}
                    onClick={() => handleChange(code)}
                    className="hover:text-blue-500"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
