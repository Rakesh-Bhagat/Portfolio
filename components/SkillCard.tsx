import { ReactNode } from "react"

interface skillCardProps{
    text: string,
    svg: ReactNode
}
const SkillCard = ({text, svg}: skillCardProps ) => {
  return (
    <div className="flex flex-col px-10 py-2 rounded-lg border border-neutral-300 col-span-1 items-center justify-center shadow-sm hover:shadow-lg transition-shadow">
        {svg}
        <p className="mt-2 text-neutral-700 text-sm">{text}</p>
    </div>
  )
}

export default SkillCard