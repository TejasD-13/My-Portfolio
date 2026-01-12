import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MOBILE_OFFSET = 510; // 👈 adjust to match your sidebar/profile height

const ScrollToSectionTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const isMobile = window.innerWidth < 1024; // lg breakpoint

    if (isMobile) {
      // 📱 MOBILE: scroll BELOW profile sidebar
      window.scrollTo({
        top: MOBILE_OFFSET,
        left: 0,
        behavior: "instant",
      });
    } else {
      // 💻 DESKTOP: reset inner scroll container
      const container = document.querySelector("[data-scroll-container]");
      if (container) {
        container.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }

      // Safety reset (doesn't affect layout)
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToSectionTop;
