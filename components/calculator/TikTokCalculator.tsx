'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { TikTokResults } from './TikTokResults';
import { TikTokTips } from './TikTokTips';
import { TikTokCalculatorResult } from '@/app/api/tiktok/route';

export function TikTokCalculator() {
  const t = useTranslations('Calculator');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TikTokCalculatorResult | null>(null);

  const handleCalculate = async () => {
    if (!username.trim()) return;

    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch(`/api/tiktok?username=${encodeURIComponent(username.trim())}`);
      const data: TikTokCalculatorResult = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error fetching TikTok data:', error);
      setResult({
        success: false,
        error: t('error')
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleCalculate();
    }
  };

  const handleReset = () => {
    setResult(null);
    setUsername('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* 主标题 */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-gray-200">
          {t('title')}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      {/* 计算器输入区域 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              TikTok Username
            </label>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
                  @
                </span>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('placeholder')}
                  disabled={isLoading}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                           placeholder-gray-500 dark:placeholder-gray-400
                           focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                           disabled:opacity-50 disabled:cursor-not-allowed
                           transition-colors duration-200"
                />
              </div>
              <Button
                onClick={handleCalculate}
                disabled={!username.trim() || isLoading}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-colors duration-200"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t('calculating')}
                  </div>
                ) : (
                  t('calculate')
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 结果展示区域 */}
      {result && (
        <TikTokResults 
          result={result} 
          onReset={handleReset}
        />
      )}

      {/* 使用说明 */}
      {!result && <TikTokTips />}
    </div>
  );
}
