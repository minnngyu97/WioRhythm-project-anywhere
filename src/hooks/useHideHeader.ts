import { useEffect } from "react";

export function useHideHeader() {
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const curr = window.scrollY;
      const header = document.querySelector("header");

      if (!header) return;

      if (curr > lastScroll) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
      }

      lastScroll = curr;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
