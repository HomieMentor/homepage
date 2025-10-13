interface CTASectionProps {
  className?: string;
}

export default function CTASection({ className = "" }: CTASectionProps) {
  return (
    <section
      className={`px-6 py-20 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-600 ${className}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          準備好開始你的成長之旅了嗎？
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          加入 Homie Mentor，讓 AI 夥伴陪伴你達成每一個目標
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
          立即免費開始
        </button>
      </div>
    </section>
  );
}
