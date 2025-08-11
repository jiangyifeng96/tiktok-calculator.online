'use client';

import { useTranslations } from 'next-intl';

export function FeaturesSection() {
  const t = useTranslations('SEO.features');

  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
              功能介绍
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              {t('description')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 dark:bg-green-900/40 rounded-lg">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
              跨平台支持
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              {t('developer')}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
              简单易用
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              {t('usage')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
