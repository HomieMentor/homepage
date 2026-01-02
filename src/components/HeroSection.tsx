import { Content } from "@/types/content";
import { ArrowRight, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  t: Content;
}

export default function HeroSection({ t }: HeroSectionProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, HZ] = useState("");

  const handleJoinWaitlist = async () => {
    if (!email) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        HZ(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      HZ("Failed to join waitlist. Please try again.");
    }
  };

  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden"
    >
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

      <div className="flex flex-col items-center gap-4 max-w-lg mx-auto">
        {status === "success" ? (
          <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-6 py-4 rounded-xl flex items-center animate-in fade-in zoom-in duration-300">
            <CheckCircle2 className="w-6 h-6 mr-3" />
            <span className="font-medium">Success! You&apos;ve joined the waiting list.</span>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleJoinWaitlist()}
                disabled={status === "loading"}
                className="block w-full pl-10 pr-3 py-4 border border-slate-200 dark:border-slate-700 rounded-full leading-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 sm:text-sm shadow-sm transition-all disabled:opacity-50"
                placeholder="name@example.com"
              />
            </div>
            <button
              onClick={handleJoinWaitlist}
              disabled={status === "loading" || !email}
              className="w-full sm:w-auto btn-primary text-lg px-8 py-4 flex items-center justify-center group whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {t.hero.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center text-red-500 dark:text-red-400 text-sm mt-2 animate-in slide-in-from-top-1">
            <AlertCircle className="w-4 h-4 mr-2" />
            {message}
          </div>
        )}
      </div>
    </section>
  );
}
