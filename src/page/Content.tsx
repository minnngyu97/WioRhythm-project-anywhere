// Content.tsx
import { useParams } from "react-router-dom";
import { ContentProps } from "../db/type/common";

const Content: React.FC<ContentProps> = () => {


  return (
    <div className="px-4 py-6">
      {/* 페이지 내용 */}
      <div className="subpage mt-6">
      </div>
    </div>
  );
};

export default Content;
