import { useLayoutEffect } from "react";
import "./ScrollStack.css";

/* ===========================
   STACK ITEM
=========================== */

export const ScrollStackItem = ({
  children,
  itemClassName = "",
  index = 0,
  baseTop = 12,      // first card top in vh
  topStep = 2        // increase per card
}) => (
  <div
    className={`scroll-stack-card sticky ${itemClassName}`}
    style={{
      top: `${baseTop + index * topStep}vh`
    }}
  >
    {children}
  </div>
);

/* ===========================
   STACK CONTAINER
=========================== */

const ScrollStack = ({
  children,
  className = "",
  baseScale = 0.85,    // first card scale
  scaleStep = 0.04,    // increase per card
  stackGap = 60
}) => {

  useLayoutEffect(() => {
    const cards = Array.from(
      document.querySelectorAll(".scroll-stack-card")
    );

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      cards.forEach((card, index) => {

        const rect = card.getBoundingClientRect();
        const cardTop = rect.top + scrollY;

        const triggerStart = cardTop - windowHeight * 0.2;
        const progress = Math.min(
          Math.max((scrollY - triggerStart) / windowHeight, 0),
          1
        );

        /* =============================
           SCALE (SMALL → BIG)
        ============================== */

        const depthScale = baseScale + index * scaleStep;

        const scale =
          depthScale + progress * (1 - depthScale);

        /* =============================
           TRANSLATE
        ============================== */

        const translateY = progress * stackGap * index;

        card.style.transform = `
          translate3d(0, ${translateY}px, 0)
          scale(${scale})
        `;

        /* =============================
           Z INDEX (last biggest on top)
        ============================== */

        card.style.zIndex = index + 1;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [baseScale, scaleStep, stackGap]);

  return (
    <div className={`w-full ${className}`}>
      {Array.from(children).map((child, i) =>
        child
          ? {
              ...child,
              props: {
                ...child.props,
                index: i
              }
            }
          : null
      )}
    </div>
  );
};

export default ScrollStack;
