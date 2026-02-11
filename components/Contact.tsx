"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
          {t.contact.title}
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
          <a
            href="mailto:wagnerparnoffpereira@gmail.com"
            className="flex items-center justify-center gap-3 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {t.contact.email}
              </div>
              <div className="font-medium text-slate-900 dark:text-white">
                wagnerparnoffpereira@gmail.com
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/wagnerparnoff"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
              <Linkedin className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {t.contact.linkedin}
              </div>
              <div className="font-medium text-slate-900 dark:text-white">
                linkedin.com/in/wagnerparnoff
              </div>
            </div>
          </a>

          <a
            href="https://github.com/wagnerparnoff"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
              <Github className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-sm text-slate-500 dark:text-slate-400">
                {t.contact.github}
              </div>
              <div className="font-medium text-slate-900 dark:text-white">
                github.com/wagnerparnoff
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
