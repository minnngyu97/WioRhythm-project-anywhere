/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1520': '1520px',
      },
      fontFamily: {
        //fontFamily 사용법 : font-pretendard
        pretendard: ["Pretendard", "sans-serif"],
        kaushan: ["Kaushan Script", "cursive"],
      },
      fontSize: {
        //fontSize 사용법 : text-menu-title
        "menu-title": "1.25rem",      // 20px → 메뉴제목
        "subscribe-btn": "0.75rem",   // 12px → 구독버튼
        "nav-ko": "1.5rem",           // 24px → 네비게이션한글
        "section-title": "2.8125rem", // 45px → 섹션제목
        "product-en": "1.5rem",       // 24px → 상품이름영어
        "product-ko": "1.25rem",      // 20px → 상품이름한글
        "badge-en": "0.875rem",       // 14px → 배지영어
        "price-unit": "1.25rem",      // 20px → 원가
        "discount-rate": "1.25rem",   // 20px → 할인율
        "sale-price": "1.25rem",      // 20px → 판매가
        "footer": "1rem",             // 16px → 푸터
        "table": "2rem",              // 32px → 테이블
        "category-menu": "1.375rem",  // 22px → 종류메뉴
        "navigation": "1.5rem"        // 24px → 네비게이션
      },
    },
  },
  safelist: [
    // JSON에서 쓰는 클래스들 전부 등록
    "font-kaushan",
    "font-pretendard",
    "bg-blue-500",
    "hover:bg-blue-600",
    "bg-yellow-500",
    "hover:bg-yellow-600",
    "bg-red-500",
    "hover:bg-red-600",
    "bg-green-500",
    "hover:bg-green-600",
    "bg-purple-600",
    "hover:bg-purple-700",
    "bg-cyan-500",
    "hover:bg-cyan-600",
    "bg-gray-700",
    "hover:bg-gray-800",
    "text-[80px]"
  ],
  plugins: [],
}

