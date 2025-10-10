import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { structuredData } from "@/lib/structured-data";

export default function Home() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      title: "智慧計劃生成",
      description: "根據你的目標、時程和任務偏好，AI 為你量身打造三種不同強度的行動計劃，讓你選擇最適合的執行方式。",
      features: ["個人化目標設定", "多強度計劃選擇", "彈性時程安排"],
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
      iconBgColor: "bg-blue-500",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "動態智慧調整",
      description: "結合你的回饋、行事曆、情緒狀態與完成度，AI 持續優化調整你的計劃強度與時程配置。",
      features: ["即時計劃調整", "情緒狀態分析", "行事曆整合"],
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
      iconBgColor: "bg-purple-500",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
      ),
      title: "溫暖情緒支持",
      description: "不同性格的 AI 夥伴陪伴你的成長之路，提供有溫度的對話，降低挫折感並協助進度回顧。",
      features: ["多元 AI 性格", "情緒陪伴對話", "成長進度回顧"],
      bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
      iconBgColor: "bg-green-500",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
        <Header />

        <HeroSection />

        {/* Features Section */}
        <section id="features" className="px-6 py-20 lg:px-8 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-gray-900 dark:text-white mb-4">為什麼選擇 Homie Mentor？</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">三大核心功能，讓你的目標達成之路更加順利</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="px-6 py-20 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title text-gray-900 dark:text-white mb-4">簡單三步驟，開啟你的成長之旅</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">設定目標與偏好</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  告訴 Homie 你的目標、預期時程、任務偏好，以及你希望的執行強度
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">選擇執行計劃</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  從三種不同強度的 AI 生成計劃中，選擇最適合你當前狀況的方案
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">執行與調整</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  與 AI 夥伴一起執行計劃，讓系統根據你的回饋智慧調整，持續成長
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />

        <Footer />
      </div>
    </>
  );
}
