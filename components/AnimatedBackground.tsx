"use client";
import { AnimatePresence, motion, useAnimationFrame } from "motion/react";
import { useState } from "react";

const gradients = [
  "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(0, 0, 255, 0.7), transparent 50%)",
  "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(255, 0, 0, 0.7), transparent 50%)",
  "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(255, 165, 0, 0.7), transparent 50%)",
  "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(0, 128, 0, 0.7), transparent 50%)",
  "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(130, 0, 219, 0.7), transparent 50%)",
];

const AnimatedBackground = () => {
  const [gradientIndex, setGradientIndex] = useState(0);

  useAnimationFrame((t) => {
    const idx = Math.floor((t / 2000) % gradients.length);
    setGradientIndex(idx);
  });

  return (
    <AnimatePresence>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 inset-x-0 w-screen h-[300px] -z-10 pointer-events-none"
        style={{
          filter: "blur(100px)",
          background: gradients[gradientIndex],
          transition: "background 1s ease-in-out",
        }}
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.9 }}
        transition={{ duration: 2 }}
      />
    </AnimatePresence>
  );
};

export default AnimatedBackground;
