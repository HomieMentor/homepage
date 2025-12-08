import { Content } from "@/types/content";
import { Check } from "lucide-react";
import { useState } from "react";

interface PricingSectionProps {
  t: Content;
}

export default function PricingSection({ t }: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">{t.pricing.subtitle}</p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium ${!isAnnual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"}`}
            >
              {t.pricing.monthly}
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-slate-200 dark:bg-slate-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 cursor-pointer"
            >
              <div
                className={`w-6 h-6 bg-white dark:bg-slate-200 rounded-full shadow-sm transform transition-transform duration-300 ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
            <span
              className={`text-sm font-medium ${isAnnual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"}`}
            >
              {t.pricing.yearly}
              <span className="ml-2 inline-block px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                {t.pricing.save}
              </span>
            </span>
          </div>
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
              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors cursor-pointer ${
                  plan.popular
                    ? "bg-sky-600 text-white hover:bg-sky-700 shadow-lg shadow-sky-200 dark:shadow-sky-900/50"
                    : "bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
