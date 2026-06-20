"use client";
import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR = "[data-cursor='hover']";

const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const active = useRef(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const hasMouse = window.matchMedia("(any-pointer: fine)").matches;
    if (!hasMouse) return;

    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      const el = e.target as HTMLElement | null;
      const isHover = !!el?.closest(HOVER_SELECTOR);
      if (isHover !== active.current) {
        active.current = isHover;
        if (isHover) {
          // snap to cursor so it doesn't fly in from the last position
          current.current.x = e.clientX;
          current.current.y = e.clientY;
        }
        ringRef.current?.classList.toggle("cursor-ring--active", isHover);
      }
    };
    const onDown = () => {
      if (active.current) ringRef.current?.classList.add("cursor-ring--down");
    };
    const onUp = () => ringRef.current?.classList.remove("cursor-ring--down");

    let raf = 0;
    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.2;
      current.current.y += (target.current.y - current.current.y) * 0.2;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] rounded-full mix-blend-difference transition-[opacity,scale] duration-200 ease-out"
    />
  );
};

export default CustomCursor;
