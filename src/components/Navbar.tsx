import { Content } from "@/types/content";
import { Globe, Menu, X, ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface NavbarProps {
  lang: "en" | "zh-tw";
  setLang: (lang: "en" | "zh-tw") => void;
  t: Content;
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLangSelect = (selectedLang: "en" | "zh-tw") => {
    setLang(selectedLang);
    setIsLangDropdownOpen(false);
  };

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

            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center text-slate-600 hover:text-sky-600 transition-colors cursor-pointer font-medium"
              >
                <Globe className="w-4 h-4 mr-2" />
                {lang === "en" ? "Language" : "語言"}
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-slate-100 py-1 animate-in fade-in zoom-in-95 duration-200">
                  <button
                    onClick={() => handleLangSelect("en")}
                    className={`w-full px-4 py-2 text-left text-sm flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${lang === "en" ? "text-sky-600 font-medium" : "text-slate-600"}`}
                  >
                    English
                    {lang === "en" && <Check className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={() => handleLangSelect("zh-tw")}
                    className={`w-full px-4 py-2 text-left text-sm flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${lang === "zh-tw" ? "text-sky-600 font-medium" : "text-slate-600"}`}
                  >
                    繁體中文
                    {lang === "zh-tw" && <Check className="w-3 h-3" />}
                  </button>
                </div>
              )}
            </div>

            <button className="btn-primary">{t.nav.cta}</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {/* Mobile Language Toggle (Simple Cycle) */}
            <button
              onClick={() => setLang(lang === "en" ? "zh-tw" : "en")}
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
