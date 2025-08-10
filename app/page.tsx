import Navbar from "@/components/Navbar";
import SkillCard from "@/components/SkillCard";
import { Circle } from "lucide-react";
import Image from "next/image";
import skills from "@/data/skills";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import projects from "@/data/projects";

export default function Home() {
  return (
    <div className=" h-screen mx-auto w-full md:max-w-xl flex flex-col font-poppins px-5">
      <Navbar />
      <div className="flex mb-10">
        <Image
          className="rounded-full mr-8"
          src={"/dp.png"}
          width={70}
          height={60}
          alt="dp"
        />
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-3xl font-semibold mb-2 tracking-tighter">
            Hey, I&apos;m Rakesh <span>👋</span>
          </h1>

          <div className="flex">
            <Circle fill="#00c950" width={10} className="mr-2 text-green-400" />
            <h2 className="flex max-w-fit text-neutral-400 border-b-2 border-dashed border-neutral-200 tracking-tighter">
              {" "}
              Available for work
            </h2>
          </div>
        </div>
      </div>
      <p className="tracking-normal leading-6 text-neutral-600 text-sm md:text-md">
        I&apos;m a 21-year-old full stack developer from India, with a focus on
        building clean and functional web applications. I enjoy learning by
        building real projects and solving practical problems.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 mt-7 justify-between gap-2">
        {skills.map((item, index) => (
          <SkillCard key={index} text={item.text} svg={item.icon} />
        ))}
      </div>

      <h2 className="mt-10 bg-neutral-100 w-fit px-2 py-1 font-poppins rounded-md text-neutral-500 text-xs border border-neutral-200 shadow-xs">
        Recent Projects
      </h2>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((item, index) => (
          <ProjectCard
          key={index}
          title={item.title}
          img={item.img}
          description={item.description}
          stack={item.stack}
          live={item.live}
          github={item.github}
        />
        ))}
        
        
      </div>
      <Footer/>
    </div>
  );
}
