"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

export default function PricingPage() {
  const [lang, setLang] = useState<"en" | "zh-tw">("zh-tw");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <div className="pt-20">
        <PricingSection t={t} />
      </div>
      <Footer t={t} />
    </div>
  );
}
