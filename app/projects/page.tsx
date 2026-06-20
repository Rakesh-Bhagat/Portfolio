import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ProjectCard from "@/components/ProjectCard"
import projects from "@/data/projects"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Rakesh Bhagat — full stack web applications built with Next.js, React, Node.js, TypeScript and Postgres.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Rakesh Bhagat",
    description:
      "Selected projects by Rakesh Bhagat — full stack web applications built with Next.js, React, Node.js, TypeScript and Postgres.",
    url: "https://bhagat.dev/projects",
  },
}

const Projects = () => {
  return (
    <div className=" h-screen mx-auto w-full md:max-w-2xl flex flex-col font-poppins px-5">
      
      <Navbar />
      <h1 className="text-4xl font-bold mb-5 dark:text-neutral-400">My Projects.</h1>
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
      <Footer />
    </div>
  )
}

export default Projects