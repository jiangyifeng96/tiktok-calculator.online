'use client';

import { useTranslations } from 'next-intl';

export function EarningsSection() {
  const t = useTranslations('SEO');

  const earningsRanges = [
    { key: 'range1', color: 'from-gray-500 to-gray-600', icon: '🌱' },
    { key: 'range2', color: 'from-blue-500 to-blue-600', icon: '🚀' },
    { key: 'range3', color: 'from-purple-500 to-purple-600', icon: '⭐' },
    { key: 'range4', color: 'from-orange-500 to-orange-600', icon: '🏆' },
    { key: 'range5', color: 'from-yellow-400 to-yellow-500', icon: '👑' }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="space-y-12">
        {/* 收入预估总述 */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {t('estimates.title')}
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('estimates.description')}
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400">
              {t('estimates.topInfluencers')}
            </p>
          </div>
        </div>

        {/* 基于粉丝数量的收入预估 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
            {t('earningsByFollowers.title')}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {earningsRanges.map((range, index) => (
              <div
                key={range.key}
                className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
              >
                {/* 背景渐变 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${range.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                
                {/* 内容 */}
                <div className="relative z-10 text-center space-y-3">
                  {/* 图标 */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${range.color} text-white text-xl`}>
                    {range.icon}
                  </div>
                  
                  {/* 收入范围 */}
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {t(`earningsByFollowers.${range.key}`)}
                    </p>
                  </div>
                  
                  {/* 等级指示器 */}
                  <div className="flex justify-center">
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i <= index
                              ? `bg-gradient-to-r ${range.color}`
                              : 'bg-gray-200 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 免责声明 */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <span className="text-amber-600 dark:text-amber-400 text-xl">⚠️</span>
            </div>
            <div className="text-sm text-amber-800 dark:text-amber-200">
              <p className="font-medium mb-1">重要提醒</p>
              <p>以上收入数据仅为基于行业平均水平的估算值，实际收入会因内容质量、互动率、品牌合作类型、地理位置等多种因素而有所不同。请将此数据作为参考，制定合理的内容策略和收益预期。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
