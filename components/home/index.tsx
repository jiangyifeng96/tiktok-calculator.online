import { TikTokCalculator } from "@/components/calculator/TikTokCalculator";
import { FeaturesSection } from "@/components/seo/FeaturesSection";
import { StepsSection } from "@/components/seo/StepsSection";
import { AdvantagesSection } from "@/components/seo/AdvantagesSection";
import { FactorsSection } from "@/components/seo/FactorsSection";
import { EarningsSection } from "@/components/seo/EarningsSection";
import { StrategiesSection } from "@/components/seo/StrategiesSection";
import { FAQSection } from "@/components/seo/FAQSection";

export default function HomeComponent() {
  return (
    <div className="w-full">
      {/* 主计算器区域 */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <TikTokCalculator />
      </section>

      {/* SEO内容区域 */}
      <div className="bg-gray-50 dark:bg-gray-900/50">
        {/* 功能介绍 */}
        <FeaturesSection />
        
        {/* 使用步骤 */}
        <div className="bg-white dark:bg-gray-900">
          <StepsSection />
        </div>
        
        {/* 优势特点 */}
        <AdvantagesSection />
        
        {/* 收入影响因素 */}
        <div className="bg-white dark:bg-gray-900">
          <FactorsSection />
        </div>
        
        {/* 收入范围预估 */}
        <EarningsSection />
        
        {/* 提升策略 */}
        <div className="bg-white dark:bg-gray-900">
          <StrategiesSection />
        </div>
        
        {/* 常见问题 */}
        <FAQSection />
      </div>
    </div>
  );
}
