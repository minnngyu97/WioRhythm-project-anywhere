import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import BannerSwiper from "../ui/BannerSwiper";
import ProductSwiper from "../ui/ProductSwiper"; // 새로 만든 상품 슬라이드 컴포넌트
import sectionTitleData from "../db/sectionTitle.json";
import allProducts from "../db/products.json"; // 상품 데이터
import allEvents from "../db/events.json";     // 이벤트 데이터

// 위시리스트 토글 함수 (utils로 빼도 됨)
const toggleWishlist = (id: number, wishIds: number[]) => {
  if (wishIds.includes(id)) {
    return wishIds.filter((wid) => wid !== id);
  }
  return [...wishIds, id];
};

interface HomeProps {
  leng: "kr" | "en";
}

const Home: React.FC<HomeProps> = ({ leng }) => {
  const sectionTitle = sectionTitleData[leng].sectionTitle;

  // 위시리스트 상태
  const [wishIds, setWishIds] = useState<number[]>([]);

  return (
    <section className="text-center">
      {/* 메인 배너 */}
      <BannerSwiper leng={leng} />

      {/* 섹션 타이틀 */}
      <SectionTitle data={sectionTitle} />

      {/* 상품 슬라이더 */}
      <ProductSwiper
        leng={leng}
        products={allProducts}
        events={allEvents}
        mode="new"          // "new" | "best" | "event" 모드 선택
        newDays={30}        // NEW 상품 기준 일수
        wishlistIds={wishIds}
        onToggleWishlist={(id) =>
          setWishIds(toggleWishlist(id, wishIds))
        }
      />
    </section>
  );
};

export default Home;
