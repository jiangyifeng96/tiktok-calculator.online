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

  // 核心收入数据 - 突出显示
  const earningsData = [
    {
      key: 'earnings',
      label: t('metrics.earnings'),
      value: `$${formatNumber(data.earnings)}`,
      icon: '💰',
      description: t('metrics.earningsDescription')
    },
    {
      key: 'earningsPerVideo',
      label: t('metrics.earningsPerVideo'),
      value: `$${formatNumber(data.estimatedEarningsPerVideo)}`,
      icon: '📈',
      description: t('metrics.earningsPerVideoDescription')
    }
  ];

  // 基础数据指标
  const basicMetrics = [
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

        {/* 核心收入数据 - 突出显示区域 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <span className="text-xl">💰</span>
            {t('earningsOverview')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {earningsData.map((earning) => (
              <div
                key={earning.key}
                className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/30 dark:to-blue-900/30 border-2 border-emerald-200 dark:border-emerald-700 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                {/* 背景装饰 */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100/50 to-blue-100/50 dark:from-emerald-800/20 dark:to-blue-800/20 rounded-full -translate-y-8 translate-x-8"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-800/50 rounded-lg flex items-center justify-center">
                      <span className="text-xl">{earning.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                        {earning.label}
                      </h4>
                      <p className="text-xs text-emerald-600/80 dark:text-emerald-400/80 mt-0.5">
                        {earning.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">
                    {earning.value}
                  </div>
                  
                  {/* 趋势指示器 */}
                  <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>{t('potentialEarnings')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 基础数据指标 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <span className="text-xl">📊</span>
            {t('accountOverview')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {basicMetrics.map((metric) => (
              <div
                key={metric.key}
                className="bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg p-4 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{metric.icon}</span>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {metric.label}
                  </span>
                </div>
                <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
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
