import { useEffect } from "react";

export function useLangSelector() {
  useEffect(() => {
    const btn = document.querySelector(".langBtnWrap");

    if (!btn) return;

    const handleClick = (e: Event) => {
      e.preventDefault();
      btn.classList.toggle("active");
    };

    btn.addEventListener("click", handleClick);

    // cleanup (언마운트 시 이벤트 제거)
    return () => {
      btn.removeEventListener("click", handleClick);
    };
  }, []);
}
