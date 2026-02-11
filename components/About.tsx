"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
          {t.about.title}
        </h2>
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
          <ul className="space-y-4 list-disc pl-5">
            {t.about.text.map((paragraph, index) => (
              <li key={index}>{paragraph}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
