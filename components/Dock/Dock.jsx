"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence
} from "motion/react";
import { useRef, useState, useEffect } from "react";
import "./Dock.css";

function DockItem({
  icon,
  label,
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );

  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="dock-item"
    >
      <img src={icon} alt={label} className="dock-icon" />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="dock-label"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Dock({
  items,
  magnification = 70,
  distance = 200,
  baseItemSize = 50,
  panelHeight = 68
}) {
  const mouseX = useMotionValue(Infinity);
  const spring = { mass: 0.1, stiffness: 150, damping: 12 };

  return (
    <motion.div
      className="dock-panel"
      style={{ height: panelHeight }}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {items.map((item, index) => (
        <DockItem
          key={index}
          {...item}
          mouseX={mouseX}
          spring={spring}
          distance={distance}
          magnification={magnification}
          baseItemSize={baseItemSize}
        />
      ))}
    </motion.div>
  );
}
