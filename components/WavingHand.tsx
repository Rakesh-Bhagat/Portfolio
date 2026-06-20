"use client";
import { motion } from "motion/react";

const WavingHand = () => {
  return (
    <motion.span
      style={{
        display: "inline-block",
        transformOrigin: "bottom center",
      }}
      className="cursor-default"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: [0, 15, -10, 15, -10, 15, -10, 0] }}
      transition={{
        duration: 1.8,
        ease: "easeInOut",
      }}
      role="img"
      aria-label="waving hand"
    >
      👋
    </motion.span>
  );
};

export default WavingHand;
