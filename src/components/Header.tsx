"use client";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <header className={`px-6 py-4 lg:px-8 ${className}`}>
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">Homie Mentor</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            功能特色
          </a>
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            運作方式
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
          >
            方案介紹
          </a>
        </div>

        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
          開始使用
        </button>
      </nav>
    </header>
  );
}
