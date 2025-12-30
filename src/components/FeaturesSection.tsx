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
                    {index === 0 && (
                      <div className="grid grid-cols-3 gap-4 p-8 w-full opacity-80">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="h-32 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-slate-100 dark:border-slate-600 animate-pulse"
                            style={{ animationDelay: `${i * 200}ms` }}
                          ></div>
                        ))}
                      </div>
                    )}
                    {index === 1 && (
                      <div className="flex flex-col gap-4 w-3/4">
                        <div className="bg-white dark:bg-slate-700 p-4 rounded-xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-600 self-start">
                          <div className="h-2 w-24 bg-slate-200 dark:bg-slate-500 rounded mb-2"></div>
                          <div className="h-2 w-32 bg-slate-100 dark:bg-slate-600 rounded"></div>
                        </div>
                        <div className="bg-sky-500 dark:bg-sky-600 p-4 rounded-xl rounded-tr-none shadow-sm self-end text-white">
                          <div className="h-2 w-28 bg-white/40 rounded mb-2"></div>
                          <div className="h-2 w-20 bg-white/20 rounded"></div>
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="w-full px-12">
                        <div className="flex items-end gap-2 h-32">
                          <div className="w-1/4 bg-sky-200 dark:bg-sky-800 rounded-t-lg h-[40%]"></div>
                          <div className="w-1/4 bg-sky-300 dark:bg-sky-700 rounded-t-lg h-[70%]"></div>
                          <div className="w-1/4 bg-sky-400 dark:bg-sky-600 rounded-t-lg h-[50%]"></div>
                          <div className="w-1/4 bg-sky-500 dark:bg-sky-500 rounded-t-lg h-[90%]"></div>
                        </div>
                      </div>
                    )}
                    {/* Unified Calendars Visual */}
                    {index === 3 && (
                      <div className="w-full h-full p-8 flex flex-col justify-center gap-4">
                        <div className="flex gap-4 items-center">
                          <div className="w-16 text-xs text-right text-slate-400 font-mono">
                            09:00
                          </div>
                          <div className="flex-1 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500 flex items-center px-4">
                            <div className="h-2 w-24 bg-blue-200 dark:bg-blue-800 rounded"></div>
                          </div>
                        </div>
                        <div className="flex gap-4 items-center">
                          <div className="w-16 text-xs text-right text-slate-400 font-mono">
                            10:30
                          </div>
                          <div className="flex-1 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500 flex items-center px-4">
                            <div className="h-2 w-32 bg-green-200 dark:bg-green-800 rounded"></div>
                          </div>
                        </div>
                        <div className="flex gap-4 items-center">
                          <div className="w-16 text-xs text-right text-slate-400 font-mono">
                            13:00
                          </div>
                          <div className="flex-1 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-l-4 border-purple-500 flex items-center px-4">
                            <div className="h-2 w-20 bg-purple-200 dark:bg-purple-800 rounded"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Smart Prioritization Visual */}
                    {index === 4 && (
                      <div className="w-full h-full p-10 flex flex-col justify-center gap-3 relative">
                        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-1 items-center">
                          <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                          <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                          <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                        </div>
                        <div className="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-lg border-l-4 border-red-500 transform scale-105 z-10 transition-transform">
                          <div className="flex justify-between items-center mb-2">
                            <div className="h-2 w-24 bg-slate-200 dark:bg-slate-500 rounded"></div>
                            <span className="text-xs font-bold text-red-500 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full">
                              High
                            </span>
                          </div>
                          <div className="h-2 w-32 bg-slate-100 dark:bg-slate-600 rounded"></div>
                        </div>
                        <div className="bg-white/80 dark:bg-slate-700/80 p-4 rounded-xl shadow-md border-l-4 border-yellow-500 transform scale-100 opacity-80">
                          <div className="flex justify-between items-center mb-2">
                            <div className="h-2 w-20 bg-slate-200 dark:bg-slate-500 rounded"></div>
                            <span className="text-xs font-bold text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-0.5 rounded-full">
                              Med
                            </span>
                          </div>
                          <div className="h-2 w-28 bg-slate-100 dark:bg-slate-600 rounded"></div>
                        </div>
                        <div className="bg-white/60 dark:bg-slate-700/60 p-4 rounded-xl shadow-sm border-l-4 border-blue-500 transform scale-95 opacity-60">
                          <div className="flex justify-between items-center mb-2">
                            <div className="h-2 w-16 bg-slate-200 dark:bg-slate-500 rounded"></div>
                            <span className="text-xs font-bold text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full">
                              Low
                            </span>
                          </div>
                          <div className="h-2 w-24 bg-slate-100 dark:bg-slate-600 rounded"></div>
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
          <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center group">
            {t.hero.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
