interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <section className={`px-6 py-20 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="hero-title text-gray-900 dark:text-white mb-6">
          你的 <span className="gradient-text">AI 行動計劃</span> 夥伴
        </h1>
        <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Homie Mentor 為你生成個人化行動計劃，智慧調整執行強度與時程，
          並提供溫暖的情緒支持，讓你在達成目標的路上不再孤單
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary hover-scale">免費開始體驗</button>
          <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              觀看介紹影片
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
