// App.tsx
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./page/Home";
import Content from "./page/Content";
import Board from "./page/Board";
import Nopage from "./page/Nopage";

// 타입
import { AppProps } from "../db/type/common";

const App: React.FC<AppProps> = ({ leng, data, setLeng }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Layout data={data} leng={leng} setLeng={setLeng}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:global" element={<Home />} />
          <Route
            path={`${leng === "kr" ? "" : "/" + leng}/content/:id`}
            element={<Content leng={leng} data={data} />}
          />
          <Route
            path={`${leng === "kr" ? "" : "/" + leng}/board/:id`}
            element={<Board leng={leng} data={data} />}
          />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
