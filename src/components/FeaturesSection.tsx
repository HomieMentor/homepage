import { Content } from "@/types/content";
import { BarChart3, Brain, MessageCircle, Calendar, Zap, ArrowRight } from "lucide-react";

interface FeaturesSectionProps {
  t: Content;
}

export default function FeaturesSection({ t }: FeaturesSectionProps) {
  return (
    <section className="py-24 bg-sky-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {t.features.title}
          </h2>
        </div>
        <div className="space-y-24">
          {t.features.items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-20`}
            >
              <div className="flex-1 w-full">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 transform hover:scale-[1.02] transition-transform duration-500">
                  <div className="aspect-video bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 opacity-50"></div>

                    {/* Feature 0: AI Schedule Think-Tank (3 columns) */}
                    {index === 0 && (
                      <div className="grid grid-cols-3 gap-4 p-8 w-full opacity-90">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className={`h-32 rounded-xl shadow-sm border flex flex-col items-center justify-center gap-2 p-2
                              ${
                                i === 2
                                  ? "bg-white dark:bg-slate-700 border-sky-200 dark:border-sky-700 ring-2 ring-sky-100 dark:ring-sky-900 scale-105 z-10"
                                  : "bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 opacity-60 scale-95"
                              } animate-pulse`}
                            style={{ animationDelay: `${i * 200}ms` }}
                          >
                            <div
                              className={`h-2 w-8 rounded-full ${i === 2 ? "bg-sky-400" : "bg-slate-300 dark:bg-slate-600"}`}
                            ></div>
                            <div
                              className={`h-1 w-12 rounded-full ${i === 2 ? "bg-sky-200" : "bg-slate-200 dark:bg-slate-700"}`}
                            ></div>
                            <div
                              className={`h-1 w-10 rounded-full ${i === 2 ? "bg-sky-200" : "bg-slate-200 dark:bg-slate-700"}`}
                            ></div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Feature 1: Natural Conversation (Chat bubbles) */}
                    {index === 1 && (
                      <div className="flex flex-col gap-6 w-3/4">
                        <div className="bg-white dark:bg-slate-700 p-4 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 dark:border-slate-600 self-start w-full relative">
                          <div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-500 rounded mb-2"></div>
                          <div className="h-2 w-3/4 bg-slate-100 dark:bg-slate-600 rounded"></div>
                        </div>
                        <div className="bg-sky-500 dark:bg-sky-600 p-4 rounded-2xl rounded-tr-sm shadow-md shadow-sky-100 dark:shadow-sky-900/20 self-end w-3/4 text-white relative">
                          <div className="h-2 w-2/3 bg-white/40 rounded mb-2"></div>
                          <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                        </div>
                      </div>
                    )}

                    {/* Feature 2: Weekly Insights (Bar chart) */}
                    {index === 2 && (
                      <div className="w-full px-16 flex items-end justify-between gap-4 h-40 pb-8">
                        <div className="w-full bg-sky-200/50 dark:bg-sky-900/30 rounded-t-lg h-[40%] relative group">
                          <div className="absolute bottom-0 w-full bg-sky-300 dark:bg-sky-700 rounded-t-lg h-0 group-hover:h-full transition-all duration-700"></div>
                        </div>
                        <div className="w-full bg-sky-200/50 dark:bg-sky-900/30 rounded-t-lg h-[70%] relative group">
                          <div className="absolute bottom-0 w-full bg-sky-400 dark:bg-sky-600 rounded-t-lg h-0 group-hover:h-full transition-all duration-700 delay-100"></div>
                        </div>
                        <div className="w-full bg-sky-200/50 dark:bg-sky-900/30 rounded-t-lg h-[50%] relative group">
                          <div className="absolute bottom-0 w-full bg-sky-500 dark:bg-sky-500 rounded-t-lg h-0 group-hover:h-full transition-all duration-700 delay-200"></div>
                        </div>
                        <div className="w-full bg-sky-200/50 dark:bg-sky-900/30 rounded-t-lg h-[90%] relative group">
                          <div className="absolute bottom-0 w-full bg-sky-600 dark:bg-sky-400 rounded-t-lg h-0 group-hover:h-full transition-all duration-700 delay-300"></div>
                        </div>
                      </div>
                    )}

                    {/* Feature 3: Unified Calendars (Monochromatic Stacked) */}
                    {index === 3 && (
                      <div className="w-full h-full p-8 flex flex-col justify-center gap-4">
                        <div className="flex gap-4 items-center opacity-70">
                          <div className="w-12 text-[10px] text-right text-slate-400 font-mono tracking-wider">
                            09:00
                          </div>
                          <div className="flex-1 h-10 bg-slate-100 dark:bg-slate-700/50 rounded-lg border-l-2 border-slate-400 flex items-center px-4">
                            <div className="h-1.5 w-16 bg-slate-200 dark:bg-slate-600 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex gap-4 items-center">
                          <div className="w-12 text-[10px] text-right text-slate-500 font-bold font-mono tracking-wider">
                            10:30
                          </div>
                          <div className="flex-1 h-12 bg-sky-50 dark:bg-sky-900/20 rounded-lg border-l-4 border-sky-500 flex items-center px-4 shadow-sm">
                            <div className="h-2 w-24 bg-sky-200 dark:bg-sky-800 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex gap-4 items-center opacity-80">
                          <div className="w-12 text-[10px] text-right text-slate-400 font-mono tracking-wider">
                            13:00
                          </div>
                          <div className="flex-1 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-2 border-blue-400 flex items-center px-4">
                            <div className="h-1.5 w-20 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Feature 4: Smart Prioritization (Subtle Priority Levels) */}
                    {index === 4 && (
                      <div className="w-full h-full p-10 flex flex-col justify-center gap-3 relative">
                        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 items-center opacity-30">
                          <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                          <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                          <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                        </div>

                        {/* High Priority */}
                        <div className="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-lg border-l-4 border-sky-600 transform scale-105 z-10 transition-transform">
                          <div className="flex justify-between items-center mb-2">
                            <div className="h-2 w-20 bg-slate-200 dark:bg-slate-500 rounded-full"></div>
                            <div className="h-1.5 w-1.5 rounded-full bg-sky-600"></div>
                          </div>
                          <div className="h-1.5 w-28 bg-slate-100 dark:bg-slate-600 rounded-full"></div>
                        </div>

                        {/* Medium Priority */}
                        <div className="bg-white/90 dark:bg-slate-700/90 p-4 rounded-xl shadow border-l-4 border-sky-400 transform scale-100 opacity-90">
                          <div className="flex justify-between items-center mb-2">
                            <div className="h-2 w-16 bg-slate-200 dark:bg-slate-500 rounded-full"></div>
                            <div className="h-1.5 w-1.5 rounded-full bg-sky-400"></div>
                          </div>
                          <div className="h-1.5 w-24 bg-slate-100 dark:bg-slate-600 rounded-full"></div>
                        </div>

                        {/* Low Priority */}
                        <div className="bg-white/80 dark:bg-slate-700/80 p-4 rounded-xl shadow-sm border-l-4 border-slate-300 transform scale-95 opacity-70">
                          <div className="flex justify-between items-center mb-2">
                            <div className="h-2 w-12 bg-slate-200 dark:bg-slate-500 rounded-full"></div>
                            <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
                          </div>
                          <div className="h-1.5 w-20 bg-slate-100 dark:bg-slate-600 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 mb-6">
                  {index === 0 && <Brain className="w-8 h-8" />}
                  {index === 1 && <MessageCircle className="w-8 h-8" />}
                  {index === 2 && <BarChart3 className="w-8 h-8" />}
                  {index === 3 && <Calendar className="w-8 h-8" />}
                  {index === 4 && <Zap className="w-8 h-8" />}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  {item.title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <a
            href={t.eaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 flex items-center justify-center group"
          >
            {t.hero.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
