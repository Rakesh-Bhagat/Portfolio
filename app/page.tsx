import Navbar from "@/components/Navbar";
import { Circle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-screen mx-auto max-w-xl flex flex-col ">
      <Navbar />
      <div className="flex mb-10">
        <Image className="rounded-full mr-8" src={"/dp.png"} width={70} height={60} alt="dp"/>
        <div className="flex flex-col">
          <h1 className=" text-3xl font-semibold mb-2 tracking-tighter">Hey, I&apos;m Rakesh <span>👋</span></h1>
          
          <div className="flex">
            <Circle fill="#00c950" width={10} className="mr-2 text-green-400"/>
            <h2 className="flex max-w-fit text-neutral-500 border-b-2 border-dashed border-neutral-300"> Available for Work</h2>
          </div>
          
        </div>
      </div>
      <p className="tracking-tight text-gray-600">I&apos;m a 21-year-old full stack developer from India, with a focus on building clean and functional web applications. I enjoy learning by building real projects and solving practical problems</p>
    </div>
  );
}
