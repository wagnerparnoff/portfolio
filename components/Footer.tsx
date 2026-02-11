export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} Wagner Parnoff. All rights reserved.
        </p>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          Built with Next.js, Tailwind CSS & Supabase
        </div>
      </div>
    </footer>
  );
}
