import { Content } from "@/types/content";
import { ArrowRight, Mail } from "lucide-react";

interface HeroSectionProps {
  t: Content;
}

export default function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-sky-100/50 dark:bg-sky-900/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-60"></div>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl mx-auto leading-tight">
        {t.hero.title}
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
        {t.hero.subtitle}
      </p>
      <p className="text-lg font-medium text-sky-600 dark:text-sky-400 mb-10">{t.hero.tagline}</p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="email"
            className="block w-full pl-10 pr-3 py-4 border border-slate-200 dark:border-slate-700 rounded-full leading-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm shadow-sm transition-all"
            placeholder="name@example.com"
          />
        </div>
        <button
          onClick={() => window.open(t.eaLink, "_blank")}
          className="w-full sm:w-auto btn-primary text-lg px-8 py-4 flex items-center justify-center group whitespace-nowrap"
        >
          {t.hero.cta}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
