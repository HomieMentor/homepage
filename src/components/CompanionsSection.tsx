import { Content } from "@/types/content";
import Image from "next/image";

interface CompanionsSectionProps {
  t: Content;
}

export default function CompanionsSection({ t }: CompanionsSectionProps) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t.companions.title}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {t.companions.items.map((companion, index) => (
            <div
              key={index}
              className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full bg-gradient-to-b from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-900/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Mobile: Always visible. Desktop: Subtle, then pops on hover */}
                  <Image
                    src={`/mentor/${companion.name}.png`}
                    alt={companion.name}
                    fill
                    className="object-cover object-top opacity-100 transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                {/* Overlay gradient for text readability if needed, or just style */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent dark:from-slate-900/50 dark:via-transparent opacity-80"></div>
              </div>

              <div className="p-8 flex-1 flex flex-col relative">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {companion.name}
                  </h3>
                  <p className="text-sm font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide">
                    {companion.role}
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                  {companion.desc}
                </p>

                {/* Quote Bubble - Always visible now for better UX, but styled nicely */}
                <div className="relative bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700 transform transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="text-sky-500 dark:text-sky-400 text-xs font-bold mb-1 uppercase tracking-wider">
                    Says
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 italic text-sm">
                    &quot;{companion.quote}&quot;
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
