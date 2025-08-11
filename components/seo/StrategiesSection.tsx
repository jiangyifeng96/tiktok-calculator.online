'use client';

import { useTranslations } from 'next-intl';

export function StrategiesSection() {
  const t = useTranslations('SEO.strategies');

  const strategies = [
    {
      key: 'consistency',
      icon: '📅',
      color: 'blue'
    },
    {
      key: 'diversify',
      icon: '🎨',
      color: 'purple'
    },
    {
      key: 'engagement',
      icon: '💬',
      color: 'green'
    },
    {
      key: 'trends',
      icon: '📈',
      color: 'orange'
    },
    {
      key: 'collaborate',
      icon: '🤝',
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        icon: 'bg-blue-500',
        text: 'text-blue-600 dark:text-blue-400'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        icon: 'bg-purple-500',
        text: 'text-purple-600 dark:text-purple-400'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        icon: 'bg-green-500',
        text: 'text-green-600 dark:text-green-400'
      },
      orange: {
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        border: 'border-orange-200 dark:border-orange-800',
        icon: 'bg-orange-500',
        text: 'text-orange-600 dark:text-orange-400'
      },
      pink: {
        bg: 'bg-pink-50 dark:bg-pink-900/20',
        border: 'border-pink-200 dark:border-pink-800',
        icon: 'bg-pink-500',
        text: 'text-pink-600 dark:text-pink-400'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            通过以下策略提升您的TikTok收入潜力，吸引更多品牌合作机会
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => {
            const colors = getColorClasses(strategy.color);
            return (
              <div
                key={strategy.key}
                className={`relative p-6 rounded-xl border transition-all duration-300 hover:shadow-lg group ${colors.bg} ${colors.border}`}
              >
                {/* 序号 */}
                <div className="absolute top-4 right-4 opacity-30">
                  <span className="text-xs font-bold text-gray-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* 图标 */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${colors.icon} text-white mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-xl">{strategy.icon}</span>
                </div>
                
                {/* 标题 */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {t(`${strategy.key}.title`)}
                </h3>
                
                {/* 描述 */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {t(`${strategy.key}.description`)}
                </p>
                
                {/* 悬停效果指示器 */}
                <div className={`absolute bottom-0 left-0 h-1 ${colors.icon} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl`}></div>
              </div>
            );
          })}
        </div>
        
        {/* 行动呼吁 */}
        <div className="text-center pt-8">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="text-lg">🚀</span>
            <span className="font-medium">立即开始使用TikTok计算器分析您的账号</span>
          </div>
        </div>
      </div>
    </section>
  );
}
