// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Global from "./Global"; // App → Global

import "./index.css"; // Tailwind 엔트리 CSS

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Global />
    </BrowserRouter>
  </StrictMode>
);
