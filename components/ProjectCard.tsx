import { ProjectCardProps } from "@/data/projects"
import { CodeXml, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const ProjectCard = ({title, img, description, stack, live, github}: ProjectCardProps) => {
  return (
    <div className="flex flex-col border border-neutral-300 px-5 py-5 rounded-lg shadow-lg hover:shadow-2xl">
      <h2 className="text-xl font-bold text-neutral-700 font-inter mb-3">{title}</h2>
      {img && <Image className="w-full rounded-lg border border-neutral-300 shadow-md" width={100} height={70} src={img} alt="project-image" />}
      <p className="mt-5 text-neutral-400 tracking font-inter text-sm">{description}</p>
      <div className="mt-5 grid grid-cols-3 md:rid-cols-5 items-center gap-2 ">
        {stack.map((item, index) => (
          <div className="bg-blue-50 rounded-full px-2 text-center py-1 text-neutral-700 text-xs" key={index}>{item}</div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2  gap-2 items-center">
      {live && <Link href={live}><p className="flex gap-2 bg-gray-900 text-neutral-200 px-4 rounded-lg text-sm py-1"> <Globe width={20}/> Website</p></Link>}
      {github && <Link href={github}><p className="flex gap-2 bg-gray-900 text-neutral-200 px-4 rounded-lg text-sm py-1"><CodeXml width={20} />github</p></Link>}
      </div>
      
    </div> 
  )
}

export default ProjectCard