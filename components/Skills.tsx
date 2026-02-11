"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Code, Server, Database, Cloud } from "lucide-react";

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.frontend,
      icon: <Code className="w-6 h-6" />,
      skills: ["React", "Vue.js", "JavaScript", "VTEX IO", "FastStore", "Tailwind CSS"],
    },
    {
      title: t.skills.backend,
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "GraphQL", "PHP", "Python"],
    },
    {
      title: t.skills.devops,
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Docker", "GitLab CI/CD", "Linux", "Grafana", "Prometheus", "OpenStack", "VMware / ESXi"],
    },
    {
      title: t.skills.data,
      icon: <Database className="w-6 h-6" />,
      skills: ["SQL Server", "ETL", "Data Integration"],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
          {t.skills.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center gap-3 mb-4 text-blue-600 dark:text-blue-400">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
