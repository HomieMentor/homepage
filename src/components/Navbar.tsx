import { Content } from "@/types/content";
import { Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
  lang: "en" | "zh-tw";
  toggleLang: () => void;
  t: Content;
}

export default function Navbar({ lang, toggleLang, t }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent"
            >
              Homie
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/pricing"
              className="text-slate-600 hover:text-sky-600 transition-colors font-medium"
            >
              {t.nav.pricing}
            </Link>
            <button
              onClick={toggleLang}
              className="flex items-center text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
            >
              <Globe className="w-4 h-4 mr-2" />
              {lang === "en" ? "繁體中文" : "English"}
            </button>
            <button className="btn-primary">{t.nav.cta}</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleLang}
              className="flex items-center text-slate-600 hover:text-sky-600 transition-colors cursor-pointer mr-4"
            >
              <Globe className="w-4 h-4 mr-2" />
              {lang === "en" ? "繁體中文" : "English"}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link
              href="/pricing"
              className="block w-full px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.pricing}
            </Link>
            <button className="w-full btn-primary">{t.nav.cta}</button>
          </div>
        </div>
      )}
    </nav>
  );
}
