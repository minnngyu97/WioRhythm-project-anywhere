import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Lang, Product, ProductList, EventList } from "../db/type/common";
import { isNew, isBest, isEventActive, formatPrice } from "../db/lib/productsUtils";
import { useEffect, useMemo, useState } from "react";

interface ProductSwiperProps {
  leng: Lang;
  products: ProductList;
  events?: EventList;

  // 어떤 모드로 보여줄지
  mode?: "all" | "new" | "best" | "event" | "category" | "wishlist";

  // 모드별 옵션
  newDays?: number;                              // NEW 기준 일수 (기본 30)
  bestBy?: "likes" | "wishlist" | "sales";       // BEST 기준
  minCount?: number;                              // BEST 최소 카운트
  eventId?: string;                               // 특정 이벤트만 보고 싶을 때
  category?: string | string[];                   // 카테고리 필터

  // 찜하기
  wishlistIds?: number[];                         // 외부에서 관리하는 찜 목록
  onToggleWishlist?: (id: number) => void;

  // UI
  slidesPerView?: number;
  spaceBetween?: number;
}

const ProductSwiper: React.FC<ProductSwiperProps> = ({
  leng,
  products,
  events = [],
  mode = "all",
  newDays = 30,
  bestBy = "wishlist",
  minCount = 100,
  eventId,
  category,
  wishlistIds = [],
  onToggleWishlist,
  slidesPerView = 4,
  spaceBetween = 24
}) => {
  // 필터링
  const items = useMemo(() => {
    let list = products;

    if (mode === "new") {
      list = list.filter(p => isNew(p, newDays));
    } else if (mode === "best") {
      list = list.filter(p => isBest(p, bestBy, minCount));
    } else if (mode === "event") {
      list = list.filter(p => isEventActive(p, events, new Date(), eventId));
    } else if (mode === "category") {
      const want = Array.isArray(category) ? category : category ? [category] : [];
      if (want.length) {
        list = list.filter(p => want.every(c => p.categories.includes(c)));
      }
    } else if (mode === "wishlist") {
      list = list.filter(p => wishlistIds.includes(p.id));
    }

    return list;
  }, [products, mode, newDays, bestBy, minCount, events, eventId, category, wishlistIds]);

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      loop
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
    >
      {items.map(p => {
        const nm = p.name[leng] as string;
        const showNew = isNew(p, newDays);
        const showBest = isBest(p, bestBy, minCount);
        const showEvent = isEventActive(p, events, new Date(), eventId);

        const wished = wishlistIds.includes(p.id);

        return (
          <SwiperSlide key={p.id}>
            <div className="relative bg-white p-5">
              {/* 뱃지들 */}
              <div className="absolute left-3 top-3 flex gap-2">
                {showNew && <span className="px-2 py-1 text-xs font-bold bg-new text-white">NEW</span>}
                {showBest && <span className="px-2 py-1 text-xs font-bold bg-best text-white">BEST</span>}
                {showEvent && <span className="px-2 py-1 text-xs font-bold bg-event text-white">EVENT</span>}
              </div>

              {/* 찜하기 */}
              {onToggleWishlist && (
                <button
                  aria-label="wish"
                  onClick={() => onToggleWishlist(p.id)}
                  className={`absolute right-3 top-3 text-2xl ${
                    wished ? "text-wish" : "text-gray-400"
                  }`}
                >
                  {wished ? "♥" : "♡"}
                </button>
              )}

              {/* 이미지 */}
              <div className="bg-product-bg hover:bg-product-bg-hover transition-colors h-[300px] grid place-items-center">
                <img src={p.image} alt={nm} className="max-h-[260px] object-contain" />
              </div>

              {/* 아이콘 세로열 */}
              {!!p.icons?.length && (
                <div className="absolute right-3 bottom-16 flex flex-col gap-1">
                  {p.icons.map((ic, i) => (
                    <img key={i} src={ic} alt={`icon-${i}`} className="w-7 h-7" />
                  ))}
                </div>
              )}

              {/* 이름 & 가격 */}
              <div className="mt-4 text-center">
                <h3 className="font-serif text-product-en">{p.name.en}</h3>
                <p className="text-product-ko text-gray-600">{p.name.kr}</p>

                <div className="mt-2">
                  {p.price.sale ? (
                    <>
                      <span className="text-gray-400 line-through mr-2">
                        {formatPrice(p.price.list)} 원
                      </span>
                      <span className="font-bold text-[20px]">
                        {formatPrice(p.price.sale)} 원
                      </span>
                    </>
                  ) : (
                    <span className="font-bold text-[20px]">
                      {formatPrice(p.price.list)} 원
                    </span>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSwiper;
