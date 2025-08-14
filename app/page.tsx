"use client";
import Navbar from "@/components/Navbar";
import SkillCard from "@/components/SkillCard";
import { ArrowRight, Circle } from "lucide-react";
import Image from "next/image";
import skills from "@/data/skills";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { AnimatePresence, motion, useAnimationFrame } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";

const gradients = [
  "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(0, 0, 255, 0.7), transparent 50%)",
  "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(255, 0, 0, 0.7), transparent 50%)",
  "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(255, 165, 0, 0.7), transparent 50%)",
  "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(0, 128, 0, 0.7), transparent 50%)",
  "radial-gradient(ellipse 100% 40% at 50% 0%, rgba(130, 0, 219, 0.7), transparent 50%)",
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [gradientIndex, setGradientIndex] = useState(0);

  useAnimationFrame((t) => {
    const idx = Math.floor((t / 2000) % gradients.length);
    setGradientIndex(idx);
  });

  if (!mounted) return null;
  return (
    <div className=" h-screen mx-auto w-full md:max-w-2xl flex flex-col font-poppins px-5 ">
      <AnimatePresence>
        <motion.div
          className="absolute top-20 left-[-100] w-full h-[300px] z-[-1]"
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
      <Navbar />
      <div className="flex mb-10">
        <Image
          className="rounded-full mr-8"
          src={"/dp.png"}
          width={70}
          height={70}
          alt="dp"
        />
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-3xl font-semibold mb-2 tracking-tighter text-neutral-800 dark:text-yellow-100">
            Hey, I&apos;m Rakesh{" "}
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
            >
              👋
            </motion.span>
          </h1>

          <div className="flex">
            <Circle fill="#00c950" width={10} className="mr-2 text-green-400" />
            <h2 className="flex max-w-fit text-neutral-400 dark:text-green-100 border-b-2 border-dashed border-neutral-200 tracking-tighter">
              {" "}
              Available for work
            </h2>
          </div>
        </div>
      </div>
      <p className="tracking-normal leading-6 text-neutral-800 dark:text-neutral-400">
        I&apos;m a 21-year-old full stack developer from India, with a focus on
        building clean and functional web applications. I enjoy learning by
        building real projects and solving practical problems.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 mt-7 justify-between gap-2">
        {skills.map((item, index) => (
          <SkillCard key={index} text={item.text} svg={item.icon} />
        ))}
      </div>

      <div className=" mt-10 flex justify-between items-center">
        <h2 className="flex bg-blue-100 dark:bg-yellow-600 w-fit px-2 py-1 font-poppins rounded-md text-neutral-500 dark:text-neutral-900 text-xs border border-blue-300 dark:border-yellow-500 shadow-xs font-semibold">
          Recent Projects
        </h2>
        <Link href={"/projects"}>
          <h2 className="flex text-blue-600 dark:text-yellow-600 hover:text-blue-900 dark:hover:text-yellow-900 cursor-pointer">
            View more <ArrowRight className="ml-2" />
          </h2>
        </Link>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <ProjectCard
          title="SketchyDraw"
          img="/sketchydraw.png"
          description="A collaborative online whiteboard built with RoughJS for sketch-style drawing. Features real-time multi-user editing via WebSockets, room-based collaboration, and Postgres persistence for saving sketches."
          stack={[
            "Typescript",
            "WebSocket",
            "Nodejs",
            "RoughJS",
            "NextJS",
            "Postgres",
            "Prisma",
          ]}
          live="https://sketchydraw.bhagat.dev"
          github="https://github.com/Rakesh-Bhagat/sketchyDraw"
        />
        <ProjectCard
          title="GGV Lost & Found"
          img="/lost.png"
          description="A campus-focused lost and found platform for reporting and locating items. Includes user authentication, item posting, and a community-driven way to reunite owners with their belongings."
          stack={["Typescript", "NextJS", "Postgres", "Prisma"]}
          live="https://lost-found-drab.vercel.app/"
          github="https://github.com/Rakesh-Bhagat/Lost-Found"
        />
      </div>
      <Footer />
    </div>
  );
}
