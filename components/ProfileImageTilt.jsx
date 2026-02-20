"use client";

import { useRef, useEffect, useMemo, useCallback } from "react";
import "./ProfileCard.css";

const clamp = (v, min = 0, max = 100) =>
  Math.min(Math.max(v, min), max);

export default function ProfileImageTilt({
  imageSrc,
  iconUrl,
  grainUrl,
  innerGradient,
  behindGlowColor,
  className = "",
}) {
  const wrapRef = useRef(null);
  const shellRef = useRef(null);

  const tiltEngine = useMemo(() => {
    let rafId = null;
    let running = false;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const setVars = (x, y) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;

      const w = shell.clientWidth || 1;
      const h = shell.clientHeight || 1;

      const px = clamp((100 / w) * x);
      const py = clamp((100 / h) * y);

      wrap.style.setProperty("--pointer-x", `${px}%`);
      wrap.style.setProperty("--pointer-y", `${py}%`);
      wrap.style.setProperty("--background-x", `${px}%`);
      wrap.style.setProperty("--background-y", `${py}%`);
      wrap.style.setProperty("--rotate-x", `${-(px - 50) / 6}deg`);
      wrap.style.setProperty("--rotate-y", `${(py - 50) / 5}deg`);
    };

    const animate = () => {
      if (!running) return;

      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      setVars(currentX, currentY);
      rafId = requestAnimationFrame(animate);
    };

    const move = (x, y) => {
      targetX = x;
      targetY = y;
      if (!running) {
        running = true;
        animate();
      }
    };

    const center = () => {
      const shell = shellRef.current;
      if (!shell) return;
      move(shell.clientWidth / 2, shell.clientHeight / 2);
    };

    const stop = () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
    };

    return { move, center, stop };
  }, []);

  const handlePointerMove = useCallback(
    (e) => {
      const shell = shellRef.current;
      if (!shell) return;
      const rect = shell.getBoundingClientRect();
      tiltEngine.move(e.clientX - rect.left, e.clientY - rect.top);
    },
    [tiltEngine]
  );

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;

    tiltEngine.center();

    shell.addEventListener("pointermove", handlePointerMove);
    shell.addEventListener("pointerleave", tiltEngine.center);

    return () => {
      shell.removeEventListener("pointermove", handlePointerMove);
      shell.removeEventListener("pointerleave", tiltEngine.center);
      tiltEngine.stop();
    };
  }, [handlePointerMove, tiltEngine]);

  return (
    <div
      ref={wrapRef}
      className={`pc-card-wrapper ${className}`}
      style={{
        "--icon": iconUrl ? `url(${iconUrl})` : "none",
        "--grain": grainUrl ? `url(${grainUrl})` : "none",
        "--inner-gradient": innerGradient,
        "--behind-glow-color": behindGlowColor,
      }}
    >
      <div className="pc-behind" />
      <div ref={shellRef} className="pc-card-shell">
        <section className="pc-card">
          <div className="pc-inside">
            <div className="pc-shine" />
            <div className="pc-glare" />
            <div className="pc-content pc-avatar-content">
              <img
                src={imageSrc}
                alt="Gio portrait"
                draggable={false}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
