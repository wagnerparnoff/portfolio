"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
      aria-label="Toggle Language"
    >
      <Languages className="w-4 h-4" />
      <span>{language === "pt" ? "PT-BR" : "EN-US"}</span>
    </button>
  );
}
