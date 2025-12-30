import { Content } from "@/types/content";

interface FooterProps {
  t: Content;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
          {t.footer.text}
        </h2>
        <a
          href={t.eaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg px-10 py-4 shadow-xl shadow-sky-200 dark:shadow-sky-900/50 inline-block"
        >
          {t.footer.cta}
        </a>
        <div className="mt-16 text-slate-400 dark:text-slate-500 text-sm">
          © {new Date().getFullYear()} Homie AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
