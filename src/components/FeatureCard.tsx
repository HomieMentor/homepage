interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  bgColor: string;
  iconBgColor: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  features,
  bgColor,
  iconBgColor,
}: FeatureCardProps) {
  return (
    <div className={`${bgColor} p-8 rounded-2xl feature-card`}>
      <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span
              className={`w-2 h-2 rounded-full mr-2 ${iconBgColor.replace("bg-", "bg-")}`}
            ></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
