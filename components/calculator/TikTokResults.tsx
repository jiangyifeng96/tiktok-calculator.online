'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { TikTokCalculatorResult } from '@/app/api/tiktok/route';
import { formatNumber } from '@/lib/utils';

interface TikTokResultsProps {
  result: TikTokCalculatorResult;
  onReset: () => void;
}

export function TikTokResults({ result, onReset }: TikTokResultsProps) {
  const t = useTranslations('Calculator');

  if (!result.success) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl shadow-lg border border-red-200 dark:border-red-800 p-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-red-100 dark:bg-red-900/40 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-red-900 dark:text-red-100">
            {t('noData')}
          </h3>
          <p className="text-red-700 dark:text-red-300">
            {result.error || t('error')}
          </p>
          <Button
            onClick={onReset}
            variant="outline"
            className="border-red-300 text-red-700 hover:bg-red-50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900/20"
          >
            {t('tryAgain')}
          </Button>
        </div>
      </div>
    );
  }

  const { data } = result;
  if (!data) return null;

  const metrics = [
    {
      key: 'username',
      label: t('metrics.username'),
      value: `@${data.username}`,
      icon: '👤'
    },
    {
      key: 'fullname',
      label: t('metrics.fullname'),
      value: data.fullname,
      icon: '🏷️'
    },
    {
      key: 'followers',
      label: t('metrics.followers'),
      value: formatNumber(data.followers),
      icon: '👥'
    },
    {
      key: 'hearts',
      label: t('metrics.hearts'),
      value: formatNumber(data.hearts),
      icon: '❤️'
    },
    {
      key: 'videos',
      label: t('metrics.videos'),
      value: formatNumber(data.videos),
      icon: '🎬'
    },
    {
      key: 'earnings',
      label: t('metrics.earnings'),
      value: `$${formatNumber(data.earnings)}`,
      icon: '💰',
      highlight: true
    },
    {
      key: 'earningsPerVideo',
      label: t('metrics.earningsPerVideo'),
      value: `$${formatNumber(data.estimatedEarningsPerVideo)}`,
      icon: '📈',
      highlight: true
    },
    {
      key: 'engagementRate',
      label: t('metrics.engagementRate'),
      value: `${data.engagementRate}%`,
      icon: '📊'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
      <div className="space-y-6">
        {/* 头部 */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t('results')}
          </h2>
          <Button
            onClick={onReset}
            variant="outline"
            size="sm"
          >
            {t('tryAgain')}
          </Button>
        </div>

        {/* 指标网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.key}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                metric.highlight
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                  : 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{metric.icon}</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {metric.label}
                </span>
              </div>
              <div className={`text-lg font-bold ${
                metric.highlight
                  ? 'text-blue-900 dark:text-blue-100'
                  : 'text-gray-900 dark:text-gray-100'
              }`}>
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* 提示信息 */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <span className="text-amber-600 dark:text-amber-400 mt-0.5">ℹ️</span>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              {t('tips.note')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
