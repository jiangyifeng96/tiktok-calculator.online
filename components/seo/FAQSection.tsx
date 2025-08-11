'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function FAQSection() {
  const t = useTranslations('SEO.faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    'howToEstimate',
    'isFree',
    'needPlugin',
    'isSafe',
    'canMakeMoney',
    'howPaid',
    'whoCanEarn',
    'howOften',
    'actualFactors',
    'howToWithdraw'
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            关于TikTok收入计算器的常见问题解答
          </p>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {t(`${item}.question`)}
                </span>
                <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {t(`${item}.answer`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 额外提示 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <span className="text-blue-600 dark:text-blue-400 text-xl">💡</span>
            </div>
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <p className="font-medium mb-1">小贴士</p>
              <p>
                如果您有其他问题或需要更多帮助，请随时通过我们的联系方式与我们取得联系。我们致力于为您提供最准确和有用的TikTok收入分析工具。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
