interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`px-6 py-12 lg:px-8 bg-gray-900 dark:bg-black ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-2xl font-bold text-white">Homie Mentor</span>
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              隱私政策
            </a>
            <a href="#" className="hover:text-white transition-colors">
              服務條款
            </a>
            <a href="#" className="hover:text-white transition-colors">
              聯絡我們
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Homie Mentor. 保留所有權利。</p>
        </div>
      </div>
    </footer>
  );
}
