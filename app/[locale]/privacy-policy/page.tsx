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
  const t = await getTranslations({ locale, namespace: "PrivacyPolicy" });

  return constructMetadata({
    page: "Privacy Policy",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/privacy-policy`,
    canonicalUrl: `/privacy-policy`,
  });
}

export default async function PrivacyPolicyPage({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPolicy" });

  return (
    <article className="w-full md:w-3/5 px-2 md:px-12">
      <div className="prose max-w-none">
        <h1>{t("title")}</h1>
        <p className="text-muted-foreground mb-6">
          {t("description")}
        </p>
        
        <h2>Information We Collect</h2>
        <p>
          We are committed to protecting your privacy. Our TikTok Calculator tool operates with minimal data collection:
        </p>
        <ul>
          <li>No personal information is required to use our service</li>
          <li>No account registration or login is needed</li>
          <li>We only process publicly available TikTok usernames that you provide</li>
          <li>Basic analytics data to improve our service (anonymous usage statistics)</li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>To provide TikTok account analysis and performance estimates</li>
          <li>To improve our service functionality and user experience</li>
          <li>To generate anonymous usage statistics for service optimization</li>
        </ul>

        <h2>Data Security</h2>
        <ul>
          <li>All connections are secured with HTTPS encryption</li>
          <li>We do not store personal user data on our servers</li>
          <li>Analysis results are generated in real-time and not permanently stored</li>
        </ul>

        <h2>Third-Party Services</h2>
        <ul>
          <li>We may use analytics services to understand usage patterns</li>
          <li>External API calls are made to retrieve public TikTok data</li>
          <li>We do not share user data with third parties for marketing purposes</li>
        </ul>

        <h2>Your Rights</h2>
        <ul>
          <li>You can use our service without providing any personal information</li>
          <li>No cookies are required for basic functionality</li>
          <li>You may contact us with any privacy concerns</li>
        </ul>

        <h2>Contact Information</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us through our support channels.
        </p>

        <p className="text-sm text-muted-foreground">
          Last updated: February 2025
        </p>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}