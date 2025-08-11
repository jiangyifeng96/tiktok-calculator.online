'use client';

import { useTranslations } from 'next-intl';

export function StepsSection() {
  const t = useTranslations('SEO.steps');

  const steps = [
    {
      number: '1',
      key: 'step1',
      icon: '📱',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '2',
      key: 'step2',
      icon: '🌐',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '3',
      key: 'step3',
      icon: '✏️',
      color: 'from-green-500 to-green-600'
    },
    {
      number: '4',
      key: 'step4',
      icon: '📊',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            只需四个简单步骤，即可快速获取任何TikTok账号的收入分析
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className="relative group"
            >
              {/* 连接线 (除了最后一个) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-3 w-6 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                </div>
              )}
              
              {/* 步骤卡片 */}
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 z-10">
                {/* 步骤编号 */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {step.number}
                </div>
                
                {/* 图标 */}
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {step.icon}
                </div>
                
                {/* 步骤描述 */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {t(step.key)}
                </p>
                
                {/* 悬停效果 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 补充说明 */}
        <div className="text-center pt-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <span className="text-2xl">⚡</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                快速、安全、准确
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              整个过程只需几秒钟，无需注册账号，无需下载软件，完全免费使用。我们采用最新的数据分析技术，为您提供最准确的收入预估。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
