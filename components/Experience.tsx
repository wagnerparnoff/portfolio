"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase } from "lucide-react";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
          {t.experience.title}
        </h2>
        <div className="space-y-12">
          {t.experience.jobs.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {job.role}
                </h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {job.period}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400 font-medium">
                <Briefcase className="w-4 h-4" />
                {job.company}
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
