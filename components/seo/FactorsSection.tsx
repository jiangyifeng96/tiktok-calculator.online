'use client';

import { useTranslations } from 'next-intl';

export function FactorsSection() {
  const t = useTranslations('SEO.factors');

  const factors = [
    {
      key: 'followers',
      icon: '👥',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      key: 'engagement',
      icon: '❤️',
      gradient: 'from-pink-500 to-red-600'
    },
    {
      key: 'monetization',
      icon: '💰',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      key: 'brandType',
      icon: '🏢',
      gradient: 'from-orange-500 to-yellow-600'
    },
    {
      key: 'geography',
      icon: '🌍',
      gradient: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {factors.map((factor, index) => (
            <div
              key={factor.key}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${factor.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${factor.gradient} text-white mb-4`}>
                  <span className="text-xl">{factor.icon}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {t(`${factor.key}.title`)}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {t(`${factor.key}.description`)}
                </p>
              </div>
              
              <div className="absolute top-4 right-4 opacity-20 text-gray-400 font-bold text-lg">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
