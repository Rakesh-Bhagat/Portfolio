

interface skillCardProps{
    text: string,
    svg: string
}
const SkillCard = ({text, svg}: skillCardProps ) => {
  return (
    <div className="flex flex-col px-10 py-2 rounded-lg border border-blue-500/30 dark:border-yellow-500/20 col-span-1 items-center justify-center shadow-sm shadow-blue-100 dark:shadow-none hover:shadow-lg dark:hover:shadow-none transition-shadow cursor-pointer">
        <div
        className="w-9 h-9"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
        <p className="mt-2 text-neutral-700 dark:text-neutral-500 text-sm">{text}</p>
    </div>
  )
}

export default SkillCard