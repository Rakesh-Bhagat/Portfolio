"use client";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  tw: number;
  twSpeed: number;
  vx: number;
  vy: number;
}

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = resolvedTheme === "dark";
    const starColor = isDark ? "255, 255, 255" : "40, 40, 60";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let raf = 0;

    const initStars = () => {
      const count = Math.min(220, Math.floor((width * height) / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.2 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.2,
        tw: Math.random() * Math.PI * 2,
        twSpeed: Math.random() * 0.015 + 0.004,
        vx: (Math.random() - 0.5) * 0.36,
        vy: (Math.random() - 0.5) * 0.36,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initStars();
    };

    const RADIUS = 160;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x += width;
        if (s.x > width) s.x -= width;
        if (s.y < 0) s.y += height;
        if (s.y > height) s.y -= height;

        let px = 0;
        let py = 0;
        let warp = 0;
        const dx = s.x - mouse.current.x;
        const dy = s.y - mouse.current.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < RADIUS * RADIUS) {
          const dist = Math.sqrt(dist2) || 1;
          // smooth falloff (stronger near the cursor)
          const t = 1 - dist / RADIUS;
          warp = t * t * (3 - 2 * t);
          const nx = dx / dist;
          const ny = dy / dist;
          // radial push + perpendicular swirl => lens-like distortion
          px = (nx * 34 + -ny * 16) * warp;
          py = (ny * 34 + nx * 16) * warp;
        }

        s.tw += s.twSpeed;
        const twinkle = s.baseAlpha * (0.55 + 0.45 * Math.sin(s.tw));
        // brighten + enlarge stars inside the distortion field
        const alpha = Math.min(1, twinkle + warp * 0.6);
        const radius = s.r * (1 + warp * 1.6);

        ctx.beginPath();
        ctx.arc(s.x + px, s.y + py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starColor}, ${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starColor}, ${s.baseAlpha})`;
        ctx.fill();
      }
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const onLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      drawStatic();
    } else {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseout", onLeave);
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none"
    />
  );
};

export default StarField;
