'use client';

import { useTranslations } from 'next-intl';

export function AdvantagesSection() {
  const t = useTranslations('SEO.advantages');

  const advantages = [
    {
      key: 'easyToUse',
      icon: '👆',
      color: 'blue'
    },
    {
      key: 'transparency',
      icon: '📊',
      color: 'green'
    },
    {
      key: 'realTimeData',
      icon: '⚡',
      color: 'purple'
    },
    {
      key: 'improveStrategy',
      icon: '🎯',
      color: 'orange'
    },
    {
      key: 'timeSaving',
      icon: '⏰',
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-blue-900/40 border-blue-200 dark:border-blue-800',
      green: 'bg-green-100 dark:bg-green-900/40 border-green-200 dark:border-green-800',
      purple: 'bg-purple-100 dark:bg-purple-900/40 border-purple-200 dark:border-purple-800',
      orange: 'bg-orange-100 dark:bg-orange-900/40 border-orange-200 dark:border-orange-800',
      pink: 'bg-pink-100 dark:bg-pink-900/40 border-pink-200 dark:border-pink-800'
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage) => (
            <div
              key={advantage.key}
              className={`p-6 rounded-xl shadow-sm border transition-all duration-200 hover:shadow-md ${getColorClasses(advantage.color)}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="text-3xl">{advantage.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {t(`${advantage.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {t(`${advantage.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
