import { Content } from "@/types/content";
import { X, ArrowRight } from "lucide-react";

interface ProblemSectionProps {
  t: Content;
}

export default function ProblemSection({ t }: ProblemSectionProps) {
  return (
    <section className="py-24 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t.problem.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-12 gap-6">
          {t.problem.items.map((item, index) => (
            <div
              key={index}
              className={`bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700 group md:col-span-6 lg:col-span-4`}
            >
              <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <X className="w-6 h-6 text-red-500 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center group">
            {t.hero.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
