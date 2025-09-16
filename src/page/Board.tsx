// Board.tsx
import { useParams } from "react-router-dom";
import { BoardProps } from "../db/type/common";

const Board: React.FC<BoardProps> = ({ leng, data }) => {
  const { id } = useParams<{ id: string }>();

  const current = id ? data[id as keyof typeof data] : null;

  if (!current) {
    return (
      <div className="px-4 py-6 text-center text-red-500">
        존재하지 않는 게시판입니다.
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      {/* 페이지 본문 */}
      <div className="subpage mt-6">

      </div>
    </div>
  );
};

export default Board;
