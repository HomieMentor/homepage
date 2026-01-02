"use client";

import { Content } from "@/types/content";
import { Brain, MessageCircle, Activity, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface FeaturesSectionProps {
  t: Content;
}

export default function FeaturesSection({ t }: FeaturesSectionProps) {
  return (
    <section className="py-16 md:py-32 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">
            {t.features.title}
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 grid-auto-flow-dense">
          {/* Feature 1 (Large) - AI Think Tank */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-slate-800 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border border-slate-700 shadow-sm overflow-hidden relative group"
          >
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-indigo-900/20 rounded-full blur-3xl -mr-10 -mt-10 md:-mr-20 md:-mt-20 transition-transform duration-700 group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 h-12 bg-indigo-900/50 rounded-xl md:rounded-2xl flex items-center justify-center text-indigo-400 mb-6 md:mb-8">
                <Brain className="w-5 h-5 md:w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                {t.features.items[0].title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 max-w-xl">
                {t.features.items[0].desc}
              </p>
            </div>
            {/* Abstract UI representation */}
            <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-32 md:h-full opacity-30 md:opacity-100 pointer-events-none">
              <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-48 md:w-64 h-32 md:h-48 bg-slate-700 rounded-lg md:rounded-xl shadow-lg border border-slate-600 p-3 md:p-4 transform rotate-2 md:rotate-3 group-hover:rotate-0 transition-all duration-500">
                <div className="flex gap-2 mb-3 md:mb-4">
                  <div className="w-6 h-6 md:w-8 h-8 rounded-full bg-slate-600" />
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="w-24 md:w-32 h-1.5 md:h-2 bg-slate-600 rounded" />
                    <div className="w-16 md:w-20 h-1.5 md:h-2 bg-slate-600 rounded" />
                  </div>
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <div className="w-full h-6 md:h-8 bg-indigo-900/30 rounded border border-indigo-800" />
                  <div className="w-full h-6 md:h-8 bg-slate-800 rounded border border-slate-600" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 (Tall) - Natural Conversation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 lg:row-span-2 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-xl overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white opacity-100" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-10 h-10 md:w-12 h-12 bg-slate-100 rounded-xl md:rounded-2xl flex items-center justify-center text-slate-900 mb-6 md:mb-8">
                <MessageCircle className="w-5 h-5 md:w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">
                {t.features.items[1].title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 flex-1">
                {t.features.items[1].desc}
              </p>

              {/* Chat UI */}
              <div className="space-y-2 md:space-y-3">
                <div className="bg-slate-100 p-2.5 md:p-3 rounded-xl md:rounded-2xl rounded-tl-sm w-3/4 self-start">
                  <div className="w-full h-1.5 md:h-2 bg-slate-200 rounded" />
                </div>
                <div className="bg-sky-600 p-2.5 md:p-3 rounded-xl md:rounded-2xl rounded-tr-sm w-3/4 ml-auto">
                  <div className="w-3/4 h-1.5 md:h-2 bg-white/40 rounded" />
                </div>
                <div className="bg-slate-100 p-2.5 md:p-3 rounded-xl md:rounded-2xl rounded-tl-sm w-2/3 self-start">
                  <div className="w-full h-1.5 md:h-2 bg-slate-200 rounded" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3 - Weekly Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-slate-800 rounded-[2rem] p-6 md:p-8 border border-slate-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 md:w-12 h-12 bg-emerald-900/50 rounded-xl md:rounded-2xl flex items-center justify-center text-emerald-400 mb-4 md:mb-6">
              <Activity className="w-5 h-5 md:w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
              {t.features.items[2].title}
            </h3>
            <p className="text-sm md:text-base text-slate-400">{t.features.items[2].desc}</p>
          </motion.div>

          {/* Feature 4 - Unified Calendars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-slate-800 rounded-[2rem] p-6 md:p-8 border border-slate-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 md:w-12 h-12 bg-amber-900/50 rounded-xl md:rounded-2xl flex items-center justify-center text-amber-400 mb-4 md:mb-6">
              <Layers className="w-5 h-5 md:w-6 h-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
              {t.features.items[3].title}
            </h3>
            <p className="text-sm md:text-base text-slate-400">{t.features.items[3].desc}</p>
          </motion.div>

          {/* Feature 5 (Wide) - Smart Prioritization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-6 bg-gradient-to-r from-sky-500 to-blue-600 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 text-white overflow-hidden relative group"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2">
                <div className="w-10 h-10 md:w-12 h-12 bg-white/20 backdrop-blur rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8">
                  <Sparkles className="w-5 h-5 md:w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  {t.features.items[4].title}
                </h3>
                <p className="text-sky-100 text-sm md:text-base leading-relaxed">
                  {t.features.items[4].desc}
                </p>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="space-y-2 md:space-y-3">
                  <div className="bg-white/10 backdrop-blur border border-white/20 p-3 md:p-4 rounded-lg md:rounded-xl flex items-center justify-between group-hover:bg-white/20 transition-colors">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]" />
                      <div className="h-1.5 md:h-2 w-24 md:w-32 bg-white/30 rounded" />
                    </div>
                    <div className="h-5 md:h-6 w-12 md:w-16 bg-white/20 rounded" />
                  </div>
                  <div className="bg-white/10 backdrop-blur border border-white/20 p-3 md:p-4 rounded-lg md:rounded-xl flex items-center justify-between opacity-70">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400" />
                      <div className="h-1.5 md:h-2 w-20 md:w-24 bg-white/30 rounded" />
                    </div>
                    <div className="h-5 md:h-6 w-12 md:w-16 bg-white/20 rounded" />
                  </div>
                  <div className="bg-white/10 backdrop-blur border border-white/20 p-3 md:p-4 rounded-lg md:rounded-xl flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400" />
                      <div className="h-1.5 md:h-2 w-16 md:w-20 bg-white/30 rounded" />
                    </div>
                    <div className="h-5 md:h-6 w-12 md:w-16 bg-white/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
