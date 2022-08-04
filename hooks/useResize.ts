import { useEffect, useState } from "react";

export default function useResize() {
  const [windowWidth, setWindowWidth] = useState(0);

  function resizeListener() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", resizeListener);

    return () => window.removeEventListener("resize", resizeListener);
  });

  return windowWidth;
}
