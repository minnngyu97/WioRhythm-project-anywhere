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
        bengali: ["Noto Serif Bengali", "serif"],
        gangwon: ["GangwonEducationTteontteon", "sans-serif"],
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
        "navigation": "1.5rem",       // 24px → 네비게이션
      },
      colors: {
        // 🎨 메인 팔레트
        "primary": "#570E19",       // 메인컬러
        black: "#000000",      // 기본 폰트
        new: "#CBAB85",        // NEW
        best: "#EACACE",       // BEST
        event: "#B6D3EF",      // EVENT
        "product-bg": "#F0F0F0", // 상품 이미지 배경
        "product-bg-hover": "#FFF2F4", // 상품 이미지 hover 배경
        wish: "#8F0016",       // 찜하기
        "taste-btn": "#EAE3DC", // 취향찾기 버튼
        "icon-bg": "#292522",
      },
    },
  },
  safelist: [
    // JSON에서 쓰는 클래스들 전부 등록
    "font-kaushan",
    "font-pretendard",
    "font-bengali",
    "font-gangwon",
    "font-light",
    "font-normal",
    "text-primary",
    "text-[30px]",
    "text-[#000]",
    "mb-[20px]",
    "mb-[0]",
    "mt-[60px]"
  ],
  plugins: [],
}

