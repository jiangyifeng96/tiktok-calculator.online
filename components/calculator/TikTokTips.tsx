'use client';

import { useTranslations } from 'next-intl';

export function TikTokTips() {
  const t = useTranslations('Calculator');

  const steps = [
    {
      number: '1',
      title: t('tips.step1'),
      icon: '✏️'
    },
    {
      number: '2',
      title: t('tips.step2'),
      icon: '🔍'
    },
    {
      number: '3',
      title: t('tips.step3'),
      icon: '📊'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800 p-8">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
          {t('tips.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
                  <span className="text-xl">{step.icon}</span>
                </div>
                <div className="w-8 h-8 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5">💡</span>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t('tips.note')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
