"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Download, Mail } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center min-h-[80vh]">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
        Wagner Parnoff
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
        {t.hero.role}
      </h2>
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
        {t.hero.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href="#projects"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          {t.hero.ctaProjects}
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
        
        <div className="flex flex-col sm:flex-row gap-2">
           <a
            href="/cv-pt.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <Download className="mr-2 h-5 w-5" />
            CV (PT)
          </a>
          <a
            href="/cv-en.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <Download className="mr-2 h-5 w-5" />
            CV (EN)
          </a>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-200 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors sm:hidden"
        >
          {t.hero.ctaContact}
          <Mail className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
