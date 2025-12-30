import { Content } from "@/types/content";
import { Globe, Menu, X, ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

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
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Homie Logo"
                width={120}
                height={32}
                className="w-auto h-8"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 transition-colors cursor-pointer font-medium"
              >
                <Globe className="w-4 h-4 mr-2" />
                {lang === "en" ? "Language" : "語言"}
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-100 dark:border-slate-700 py-1 animate-in fade-in zoom-in-95 duration-200">
                  <button
                    onClick={() => handleLangSelect("en")}
                    className={`w-full px-4 py-2 text-left text-sm flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer ${lang === "en" ? "text-sky-600 dark:text-sky-400 font-medium" : "text-slate-600 dark:text-slate-300"}`}
                  >
                    English
                    {lang === "en" && <Check className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={() => handleLangSelect("zh-tw")}
                    className={`w-full px-4 py-2 text-left text-sm flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer ${lang === "zh-tw" ? "text-sky-600 dark:text-sky-400 font-medium" : "text-slate-600 dark:text-slate-300"}`}
                  >
                    繁體中文
                    {lang === "zh-tw" && <Check className="w-3 h-3" />}
                  </button>
                </div>
              )}
            </div>

            <ThemeToggle />
            <a href={t.eaLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            {/* Mobile Language Toggle (Simple Cycle) */}
            <button
              onClick={() => setLang(lang === "en" ? "zh-tw" : "en")}
              className="flex items-center text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 transition-colors cursor-pointer"
            >
              <Globe className="w-4 h-4 mr-2" />
              {lang === "en" ? "繁體中文" : "English"}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white cursor-pointer"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <a
              href={t.eaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary block text-center"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
