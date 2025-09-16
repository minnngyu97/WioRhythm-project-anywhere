// Nopage.tsx
const Nopage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-700">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-lg mb-6">해당 페이지가 없습니다. 주소창을 확인하세요.</p>
      <a
        href="/"
        className="px-6 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition"
      >
        홈으로 돌아가기
      </a>
    </div>
  );
};

export default Nopage;
