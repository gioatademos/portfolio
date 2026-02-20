"use client";
import { useEffect, useRef } from "react";
import "./TimelineScroll.css";

export default function TimelineScroll({ experiences = [], dark = false }) {
  const outerRef = useRef(null);
  const stickyRef = useRef(null);
  const blueBoxRef = useRef(null);
  const innerRef = useRef(null);
  const progressLineRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const sticky = stickyRef.current;
    const blueBox = blueBoxRef.current;
    const inner = innerRef.current;
    const progressLine = progressLineRef.current;

    if (!outer || !sticky || !blueBox || !inner) return;

    // this template scrolls inside .page--current, not the window
    const scroller = outer.closest(".page--current") || window;

    const getStickyTopPx = () => {
      const topStr = getComputedStyle(sticky).top; // "2vh" or "96px"
      if (topStr.endsWith("vh")) return (parseFloat(topStr) / 100) * window.innerHeight;
      return parseFloat(topStr) || 0;
    };

    const getBlueViewportH = () => {
      const boxStyle = getComputedStyle(blueBox);
      const padTop = parseFloat(boxStyle.paddingTop) || 0;
      const padBottom = parseFloat(boxStyle.paddingBottom) || 0;
      return {
        padTop,
        viewportH: Math.max(0, blueBox.clientHeight - padTop - padBottom),
      };
    };

    const updateOuterHeight = () => {
      const stickyH = sticky.getBoundingClientRect().height;
      const { viewportH } = getBlueViewportH();

      const translateRange = Math.max(0, inner.scrollHeight - viewportH);
      const buffer = 80;

      outer.style.height = `${stickyH + translateRange + buffer}px`;
    };

    const onScroll = () => {
      const stickyTop = getStickyTopPx();
      const stickyH = sticky.getBoundingClientRect().height;

      let progress = 0;

      if (scroller === window) {
        const outerRect = outer.getBoundingClientRect();
        const scrollRange = Math.max(1, outer.offsetHeight - stickyH);
        const scrolled = stickyTop - outerRect.top;
        progress = Math.max(0, Math.min(scrolled / scrollRange, 1));
      } else {
        const outerTopInScroller = outer.offsetTop;
        const start = outerTopInScroller - stickyTop;
        const scrollRange = Math.max(1, outer.offsetHeight - stickyH);
        progress = Math.max(0, Math.min((scroller.scrollTop - start) / scrollRange, 1));
      }

      const { padTop, viewportH } = getBlueViewportH();
      const maxTranslate = Math.max(0, inner.scrollHeight - viewportH);
      inner.style.transform = `translate3d(0, -${progress * maxTranslate}px, 0)`;

      // Progress line
      if (progressLine) {
        progressLine.style.height = `${progress * viewportH}px`;
      }

      // Fade items
      const boxRect = blueBox.getBoundingClientRect();
      const viewportTop = boxRect.top + padTop;

      const items = inner.querySelectorAll("[data-timeline-item]");
      items.forEach((el) => {
        const r = el.getBoundingClientRect();
        const mid = r.top + r.height / 2;
        const t = (mid - viewportTop) / Math.max(1, viewportH);
        const opacity = Math.max(0.2, Math.min(1, (t - 0.05) / 0.35));
        el.style.opacity = opacity.toString();
      });

      // Dots turn purple when passed
      const dots = inner.querySelectorAll("[data-timeline-dot]");
      const lineBottom = viewportTop + viewportH * progress;

      dots.forEach((dot) => {
        const r = dot.getBoundingClientRect();
        const dotY = r.top + r.height / 2;
        dot.style.backgroundColor = dotY <= lineBottom ? "#8063c0" : "#ffffff";
      });
    };

    // initial run AFTER paint
    requestAnimationFrame(() => {
      updateOuterHeight();
      onScroll();
    });

    const resizeHandler = () => {
      updateOuterHeight();
      onScroll();
    };

    if (scroller === window) {
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      scroller.addEventListener("scroll", onScroll, { passive: true });
    }
    window.addEventListener("resize", resizeHandler);

    const ro = new ResizeObserver(() => {
      updateOuterHeight();
      onScroll();
    });
    ro.observe(inner);
    ro.observe(blueBox);

    return () => {
      if (scroller === window) {
        window.removeEventListener("scroll", onScroll);
      } else {
        scroller.removeEventListener("scroll", onScroll);
      }
      window.removeEventListener("resize", resizeHandler);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="timeline-wrap">
      <div ref={outerRef} className="timeline-outer">
        <div ref={stickyRef} className="timeline-sticky">
          <h3 className={`timeline-title ${dark ? "timeline-title--dark" : ""}`}>
            experience &amp; education
          </h3>

          <div ref={blueBoxRef} className="timeline-bluebox">
            <div className="timeline-center-dash" />

            <div ref={progressLineRef} className="timeline-progress" />

            <div ref={innerRef} className="timeline-inner">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div key={exp.id} data-timeline-item className="timeline-item">
                    <div data-timeline-dot className="timeline-dot" />

                    <div className={`timeline-side ${isLeft ? "left" : "right"}`}>
                      <div className="timeline-card">
                        <h4 className="timeline-card-title">{exp.title}</h4>
                        <p className="timeline-card-date">{exp.date}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
