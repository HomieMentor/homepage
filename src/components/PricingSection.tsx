import { Content } from "@/types/content";
import { Check } from "lucide-react";

interface PricingSectionProps {
  t: Content;
}

export default function PricingSection({ t }: PricingSectionProps) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border ${
                plan.popular
                  ? "border-sky-500 dark:border-sky-500 shadow-xl scale-105 z-10"
                  : "border-slate-100 dark:border-slate-700 hover:shadow-lg"
              } transition-all duration-300 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-500 dark:bg-sky-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm min-h-[40px]">
                  {plan.desc}
                </p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 ml-2">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://forms.gle/VDnMnY5Gr7hr6Eb77"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors cursor-pointer block text-center ${
                  plan.popular
                    ? "bg-sky-600 text-white hover:bg-sky-700 shadow-lg shadow-sky-200 dark:shadow-sky-900/50"
                    : "bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
