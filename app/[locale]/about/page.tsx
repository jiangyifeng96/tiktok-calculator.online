import { Locale, LOCALES } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Params = Promise<{
  locale: string;
}>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

  return constructMetadata({
    page: "About",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/about`,
    canonicalUrl: `/about`,
  });
}

export default async function AboutPage({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

  return (
    <article className="w-full md:w-3/5 px-2 md:px-12">
      <div className="prose max-w-none">
        <h1>{t("title")}</h1>
        <p className="text-muted-foreground">
          {t("description")}
        </p>
        
        <h2>✨ Key Features</h2>
        <ul>
          <li>📊 Performance Analytics: Analyze engagement patterns and account performance metrics</li>
          <li>🚀 Instant Results: Get detailed statistical estimates in seconds</li>
          <li>🌐 Multilingual Support: Available in English, Chinese, and Japanese</li>
          <li>📱 Mobile Friendly: Fully responsive design for all devices</li>
          <li>🔒 Privacy Focused: No account login required, anonymous analysis</li>
          <li>💯 100% Free: Complete access to all features for educational purposes</li>
        </ul>

        <h2>🎯 Who Can Use TikTok Calculator</h2>
        
        <h3>Content Creators</h3>
        <ul>
          <li>Analyze account performance patterns</li>
          <li>Track engagement metrics</li>
          <li>Understand content effectiveness</li>
        </ul>

        <h3>Researchers & Students</h3>
        <ul>
          <li>Study social media engagement trends</li>
          <li>Analyze content performance patterns</li>
          <li>Research TikTok ecosystem dynamics</li>
        </ul>

        <h3>Marketing Professionals</h3>
        <ul>
          <li>Evaluate content performance</li>
          <li>Analyze engagement patterns</li>
          <li>Research market trends</li>
        </ul>

        <h2>⚠️ Important Disclaimer</h2>
        <ul>
          <li>All estimates are statistical approximations for educational purposes only</li>
          <li>Should not be considered as financial advice or guaranteed outcomes</li>
          <li>Actual performance varies based on many factors</li>
          <li>Tool is for research and educational use only</li>
          <li>We do not guarantee accuracy of third-party data sources</li>
        </ul>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}