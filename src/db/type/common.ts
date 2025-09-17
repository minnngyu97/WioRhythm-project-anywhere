export interface AppProps {
  leng: string;
  data: any; // 추후 데이터 구조 확정되면 any → 구체적인 타입으로 변경
  setLeng: React.Dispatch<React.SetStateAction<string>>;
}

// 페이지 정보
export interface Page {
  title: string;
  p: string;
}

// 각 메뉴 항목
export interface MenuItem {
  path: string;
  label: string;
  page: Page;
}

// 언어별 데이터 (about, location, history, notice, inquiry, showroom)
export interface LanguageData {
  about: MenuItem;
  location: MenuItem;
  history: MenuItem;
  notice: MenuItem;
  inquiry: MenuItem;
  showroom: MenuItem;
}

// 전체 데이터 (kr, en, cn)
export interface GlobalData {
  kr: LanguageData;
  en: LanguageData;
  cn: LanguageData;
}

export interface HeaderProps {
  data: LanguageData;
  setLeng: React.Dispatch<React.SetStateAction<"kr" | "en">>;
}

// ../db/type/common.tsx
import { ReactNode } from "react";

export interface LayoutProps {
  children?: ReactNode;
  data: LanguageData;
  setLeng: React.Dispatch<React.SetStateAction<"kr" | "en">>;
}


export interface ContentProps {
  data: LanguageData;
  leng: "kr" | "en" | "cn";
  setLeng: React.Dispatch<React.SetStateAction<"kr" | "en">>;
}

export interface HomeParams {
  global?: string;
}

export interface AboutProps {
  data: LanguageData;
  leng: "kr" | "en" | "cn";
  setLeng: React.Dispatch<React.SetStateAction<"kr" | "en" | "cn">>;
}

export interface LocationProps {
  leng: "kr" | "en" | "cn";
  title: { label: string; path: string; page: { title: string; p: string } };
}

export interface BoardProps {
  leng: "kr" | "en" | "cn";
  data: LanguageData;
}

// Notice 전용 타입
export interface NoticeBar {
  message: string;
}

export interface LanguageNotice {
  noticeBar: NoticeBar;
}

export interface GlobalNotice {
  kr: LanguageNotice;
  en: LanguageNotice;
}

// Notice 컴포넌트 Props 타입
export interface NoticeProps {
  leng: "kr" | "en";
}

export interface BannerItem {
  src: string;
  title: string;
  subtitle: string;
  link: string;
}

export interface BannerLanguage {
  banners: BannerItem[];
}

export interface BannerData {
  kr: BannerLanguage;
  en: BannerLanguage;
}


