# 🍷 와인 서비스 프로젝트 개요

**“쉽게 즐기는 와인, 스마트한 경험”**  
바이오리듬처럼 와인이 스며들도록, 누구나 와인을 친근하게 즐길 수 있는 서비스를 목표로 합니다.  

---

## 👥 Team

<ul>
  <li>이지영 – 기획/디자인</li>
  <li>김민규 – 개발</li>
</ul>

---

## 🔑 주요 기능

<ul>
  <li><strong>취향 찾기</strong>: 몇 번의 클릭으로 나의 취향에 맞는 와인을 추천</li>
  <li><strong>구독 서비스</strong>: 정기배송 + 맞춤 큐레이션</li>
  <li><strong>테이블 서비스</strong>: 오프라인 공간에서 와인을 체험하고 구매 연결</li>
  <li><strong>상품 카탈로그</strong>: 전체 와인 상품 리스트 제공</li>
  <li><strong>브랜드 아이덴티티</strong>: 고급스럽지만 친근하고, 어렵지 않고 편리한 경험</li>
</ul>

---

## 👤 사용자 페르소나 & 어려움

### 사용자의 Pain Points
- 와인은 병으로 사야 하니 고르기 어렵고 신중해짐  
- 입문자가 **어떻게 시작해야 할지 모름**  
- 종류가 너무 많아 선택이 힘듦  
- 라벨(병 모양)만 보고 샀다가 실패한 경험 多  
- 이미 마셔본 와인 말고 새로운 것을 찾고 싶음  
- 마트에서 구매 시 **무겁고 번거로움**  
- 직접 사와야 해서 귀찮음  

### 시장 특성
- 와인에 대한 **호기심과 수요 증가**  
- 특별한 날이 아닌 **일상적 소비 패턴 증가**  
- 배달 문화가 발달한 한국 시장에 적합  

---

## 🎨 브랜드 아이덴티티

- **핵심 가치**: 쉽게, 친근하게, 편리하게  
- **비전**: 고급스러움 + 접근성의 균형  
- **지향점**:  
  - 와인이 **바이오리듬처럼 일상에 스며듦**  
  - **어렵지 않고 편리한 경험** 제공  

---

## 🛠 기술 스택

<pre><code>
{
  "dependencies": {
    "@supabase/supabase-js": "^2.39.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^1.3.0",
    "react-hook-form": "^7.50.1",
    "react-router-dom": "^7.8.2",
    "swiper": "^11.2.10"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.16",
    "eslint": "^9.13.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "postcss": "^8.4.31",
    "tailwindcss": "^3.4.1",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.11.0",
    "vite": "^5.4.10"
  }
}
</code></pre>

## 🗂 네비게이션 (프로토타입)

<pre><code>
App.tsx (메인 컨테이너)
├── Global.tsx (다국어 상태 관리, 데이터 주입)
├── Layout.tsx (공통 레이아웃)
│   ├── Hd.tsx (헤더)
│   ├── Ft.tsx (푸터)
│   └── Notice.tsx (상단 공지바)
│
├── page (페이지 라우팅)
│   ├── Home.tsx (홈 페이지)
│   ├── Content.tsx (컨텐츠 상세 페이지)
│   ├── Board.tsx (게시판 페이지)
│   └── Nopage.tsx (404 페이지)
│
├── subpage (서브 페이지들)
│   └── (추후 추가 예정)
│
├── ui (UI 컴포넌트)
│   ├── Button.tsx (공용 버튼)
│   ├── Notice.tsx (공지 컴포넌트)
│   ├── ProductsSection.tsx (상품 섹션)
│   ├── Swiper.tsx (배너/슬라이드 컴포넌트)
│
├── db (데이터)
│   ├── navi.json (네비게이션 데이터)
│   ├── notice.json (공지 데이터)
│   └── type/common.ts (타입 정의)
│
├── assets (정적 리소스)
│   └── react.svg
│
├── index.css (전역 스타일)
├── App.css (컴포넌트 전역 스타일)
├── main.tsx (리액트 진입점)
└── vite-env.d.ts (Vite 타입 정의)
</code></pre>

---

## 🚀 기획 내용

### 1) 취향 찾기
<ul>
  <li>몇 번의 클릭으로 개인 취향에 맞는 와인 추천</li>
  <li>구매 실패 확률 ↓, 구매 성공률 ↑</li>
  <li>정보 과다 속에서 혼란을 줄여주는 <strong>도구 역할</strong></li>
  <li>탐색 과정에서 홈페이지 체류시간 증가</li>
  <li>다양한 상품 노출 → 자연스러운 홍보 효과</li>
</ul>

---

### 2) 구독 서비스
<ul>
  <li>선택한 취향대로 <strong>정기배송</strong></li>
  <li>매달 구독료 → 안정적인 수익 모델</li>
  <li>맞춤형 추천 → 구매 성공률 향상</li>
  <li>회원가입·재구매 유도</li>
  <li>배달 친화적 한국 시장에 최적화</li>
</ul>

---

### 3) 테이블 서비스
<ul>
  <li>구독/구매를 주저하는 사용자에게 <strong>체험 기회 제공</strong></li>
  <li>오프라인에서 와인을 직접 경험 → 구매로 연결</li>
  <li>부가 수익 창출 + 광고 효과</li>
</ul>

---

## 📊 기대 효과

<table>
  <thead>
    <tr>
      <th>분야</th>
      <th>효과</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>시장 진입</td>
      <td>와인에 대한 진입장벽 완화</td>
    </tr>
    <tr>
      <td>고객</td>
      <td>신규 고객 유입 + 충성 고객 확보</td>
    </tr>
    <tr>
      <td>운영</td>
      <td>구독 기반 안정적 수익 + 부가 수익 창출</td>
    </tr>
    <tr>
      <td>경험</td>
      <td>온라인과 오프라인을 아우르는 하이브리드 경험 제공</td>
    </tr>
  </tbody>
</table>

---

## 🛠 디자인 & 기술 방향

- **UI/UX**: 심플하고 직관적인 디자인, 모바일 우선  
- **서비스 모델**:  
  - 온라인 취향찾기 → 맞춤 추천  
  - 정기 구독 배송 → 안정 수익  
  - 테이블 체험 → 오프라인 접점 확장  
- **브랜드 컬러/아이덴티티**: 친근하지만 고급스러운 느낌 유지  

---

## 📋 Git 단독 커밋 체크리스트
### 1. 초기 세팅
<pre><code>
| 버전 | 상태 | 항목 |
|------|------|
| - [ ] | chore: initialize vite react-ts project |
| - [ ] | chore: add tailwindcss + postcss + autoprefixer |
| - [ ] | chore: add eslint + prettier |
</code></pre>
---
### 2. 공용 설정
<pre><code>
| 버전 | 상태 | 항목 |
|------|------|
| - [ ] | chore: add global styles and fonts (Pretendard) |
| - [ ] | chore: configure tsconfig paths and aliases |
</code></pre>
---
### 3. 타입 & 유틸
<pre><code>
| 버전 | 상태 | 항목 |
|------|------|
| - [ ] | feat(types): add common interfaces (user, auth, board) |
| - [ ] | feat(utils): add api client and helpers |
</code></pre>
---
### 4. UI 레이아웃
<pre><code>
| 버전 | 상태 | 항목 |
|------|------|
| - [ ] | feat(layout): add header and footer |
| - [ ] | feat(layout): add global navigation |
| - [ ] | feat(layout): add container and responsive grid |
</code></pre>
---
### 5. 주요 기능
<pre><code>
| 버전 | 상태 | 항목 |
|------|------|
| - [ ] | feat(auth): add login component |
| - [ ] | feat(auth): add register component |
| - [ ] | feat(board): add board list and detail |
| - [ ] | feat(reservation): add reservation form |
| - [ ] | feat(reservation): integrate calendar/time picker |
</code></pre>
---
### 6. 스타일 & UI 개선
<pre><code>
| 버전 | 상태 | 항목 |
|------|------|
| - [ ] | style: apply tailwind theme tokens (colors, spacing) |
| - [ ] | style: add button and input components |
| - [ ] | style: add responsive hero section |
</code></pre>
---
### 7. 기타 관리
<pre><code>
| 버전  | 상태 | 항목 |
|------|------|
| - [ ] | docs: add README with project setup instructions |
| - [ ] | chore: add gitignore and editorconfig |
| - [ ] | chore: add vercel deployment config |
| - [ ] | test: add sample unit tests (if applicable) |
</code></pre>

---

## ✅ Git 커밋 컨벤션

- **feat:** 새로운 기능 추가  
- **fix:** 버그 수정  
- **style:** 스타일/레이아웃 수정 (기능 영향 없음)  
- **chore:** 환경 세팅/빌드/패키지 관리  
- **docs:** 문서 작업 (README, 주석)  
- **refactor:** 리팩토링 (기능 변화 없음)  
- **test:** 테스트 코드  
