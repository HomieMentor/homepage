import { Content } from "@/types/content";

interface CompanionsSectionProps {
  t: Content;
}

export default function CompanionsSection({ t }: CompanionsSectionProps) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t.companions.title}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {t.companions.items.map((companion, index) => (
            <div
              key={index}
              className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-sky-200 dark:hover:border-sky-700 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-2xl font-bold text-sky-600 dark:text-sky-400 group-hover:bg-sky-50 dark:group-hover:bg-sky-900/30 transition-colors">
                    {companion.name[0]}
                  </div>
                  <span className="px-4 py-1 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider group-hover:bg-sky-50 dark:group-hover:bg-sky-900/30 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    AI Companion
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {companion.name}
                </h3>
                <p className="text-sm font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide mb-4">
                  {companion.role}
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm leading-relaxed min-h-[80px]">
                  {companion.desc}
                </p>
                <div className="relative p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl group-hover:bg-sky-50/50 dark:group-hover:bg-sky-900/20 transition-colors">
                  <div className="absolute top-4 left-4 text-sky-200 dark:text-sky-800 text-4xl font-serif leading-none">
                    &quot;
                  </div>
                  <p className="relative z-10 text-slate-600 dark:text-slate-400 italic text-sm text-center pt-2">
                    {companion.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
