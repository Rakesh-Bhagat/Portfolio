"use client";
import experience from "@/data/experience";
import education from "@/data/education";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type Tab = "experience" | "education";

const ExperienceSection = () => {
  const [tab, setTab] = useState<Tab>("experience");

  return (
    <section className="mt-12">
      <h2 className="flex bg-blue-100 dark:bg-yellow-600 w-fit px-2 py-1 font-poppins rounded-md text-neutral-500 dark:text-neutral-900 text-xs border border-blue-300 dark:border-yellow-500 shadow-xs font-semibold mb-4">
        Experience & Education
      </h2>

      <div
        role="tablist"
        aria-label="Experience and education"
        className="relative grid grid-cols-2 w-full p-1 mb-6 rounded-lg bg-blue-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
      >
        {(
          [
            { id: "experience", label: "Experience", Icon: Briefcase },
            { id: "education", label: "Education", Icon: GraduationCap },
          ] as const
        ).map(({ id, label, Icon }) => {
          const active = tab === id;
          return (
            <button
              key={id}
              role="tab"
              aria-selected={active}
              onClick={() => setTab(id)}
              className={`relative z-10 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                active
                  ? "text-neutral-100 dark:text-neutral-900"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {active && (
                <motion.div
                  layoutId="tab-slider"
                  className="absolute inset-0 -z-10 rounded-md bg-gray-900 dark:bg-yellow-500 shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <Icon width={16} /> {label}
            </button>
          );
        })}
      </div>

      {tab === "experience" && (
        <div role="tabpanel" className="flex flex-col">
          {experience.map((item, index) => (
            <TimelineItem
              key={index}
              isLast={index === experience.length - 1}
              period={item.period}
              heading={item.role}
            >
              <p className="text-sm text-blue-600 dark:text-yellow-600 mb-2">
                {item.company} · {item.location}
              </p>
              <ul className="list-disc list-outside ml-4 flex flex-col gap-1.5">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-neutral-500 dark:text-neutral-500 leading-6"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </div>
      )}

      {tab === "education" && (
        <div role="tabpanel" className="flex flex-col">
          {education.map((item, index) => (
            <TimelineItem
              key={index}
              isLast={index === education.length - 1}
              period={item.period}
              heading={item.institution}
            >
              <p className="text-sm text-blue-600 dark:text-yellow-600">
                {item.degree}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                {item.detail} · {item.location}
              </p>
            </TimelineItem>
          ))}
        </div>
      )}
    </section>
  );
};

const TimelineItem = ({
  heading,
  period,
  isLast,
  children,
}: {
  heading: string;
  period: string;
  isLast: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <span className="mt-1.5 w-3 h-3 shrink-0 rounded-full bg-blue-500 dark:bg-yellow-500 ring-4 ring-blue-100/60 dark:ring-yellow-500/15" />
        {!isLast && (
          <span className="w-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        )}
      </div>
      <div className={isLast ? "flex-1" : "flex-1 pb-8"}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300 font-inter">
            {heading}
          </h3>
          <span className="text-xs text-neutral-400 dark:text-neutral-500 whitespace-nowrap">
            {period}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ExperienceSection;
