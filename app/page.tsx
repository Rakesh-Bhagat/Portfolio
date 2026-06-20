import Navbar from "@/components/Navbar";
import SkillCard from "@/components/SkillCard";
import { ArrowRight, Circle, Download } from "lucide-react";
import Image from "next/image";
import skills from "@/data/skills";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import WavingHand from "@/components/WavingHand";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <div className=" h-screen mx-auto w-full md:max-w-2xl flex flex-col font-poppins px-5 ">
      <AnimatedBackground />
      <Navbar />
      <div className="flex mb-10">
        <Image
          className="rounded-full mr-8"
          src={"/dp.png"}
          width={70}
          height={70}
          alt="Portrait of Rakesh Bhagat, full stack developer"
          priority
        />
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-3xl font-semibold mb-2 tracking-tighter text-neutral-800 dark:text-yellow-100">
            Hey, I&apos;m Rakesh <WavingHand />
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
        I&apos;m a full stack developer from India with a soft spot for the
        backend, currently building production apps at{" "}
        <span className="font-semibold text-neutral-900 dark:text-neutral-300">
          Crescentia One
        </span>
        . I like wiring up APIs, automating the boring stuff, and chasing down
        the kind of bugs that only show up in production. Mostly I enjoy turning
        messy ideas into things that actually work.
      </p>

      <a
        href="/Rakesh_bhagat_resume_june.pdf"
        download
        className="mt-6 flex w-fit items-center gap-2 rounded-md bg-gray-900 dark:bg-yellow-500 px-4 py-2 text-sm font-semibold text-neutral-100 dark:text-neutral-900 transition-opacity hover:opacity-90"
      >
        <Download width={18} /> Download Resume
      </a>

      <div className="grid grid-cols-2 lg:grid-cols-4 mt-7 justify-between gap-2">
        {skills.map((item, index) => (
          <SkillCard key={index} text={item.text} svg={item.icon} />
        ))}
      </div>

      <ExperienceSection />

      <div className=" mt-12 flex justify-between items-center">
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
          title="Chate CRM"
          img="/chate.png"
          description="A multi-branch CRM for lead management and WhatsApp automation. Ingests leads from 4 channels (Meta Ads, Shopify, walk-in QR codes, and inbound call-log webhooks) with HMAC-verified webhooks and round-robin counselor assignment, a config-driven pipeline-stage engine with auto-sending WhatsApp templates, and role-based access enforced through PostgreSQL Row-Level Security."
          stack={[
            "Next.js",
            "Typescript",
            "PostgreSQL",
            "Supabase",
            "RLS",
            "Webhooks",
          ]}
          live="https://crm.chatecoachingclasses.co"
        />
        <ProjectCard
          title="ProfitMaster"
          img="/profitmaster.png"
          description="An online education and events platform offering paid courses, live events, and training programs with an integrated checkout and payment flow. Paired with a custom admin dashboard for managing blog content, event registrations, and media — built on Supabase, Prisma, and Cloudflare R2 storage."
          stack={[
            "Next.js",
            "Typescript",
            "Supabase",
            "Prisma",
            "Tailwind CSS",
            "Cloudflare R2",
          ]}
          live="https://profitmaster.in"
        />
      </div>
      <Footer />
    </div>
  );
}
