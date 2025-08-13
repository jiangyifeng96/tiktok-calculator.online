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
  const t = await getTranslations({ locale, namespace: "TermsOfService" });

  return constructMetadata({
    page: "Terms of Service",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/terms-of-service`,
    canonicalUrl: `/terms-of-service`,
  });
}

export default async function TermsOfServicePage({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "TermsOfService" });

  return (
    <article className="w-full md:w-3/5 px-2 md:px-12">
      <div className="prose max-w-none">
        <h1>{t("title")}</h1>
        <p className="text-muted-foreground mb-6">
          {t("description")}
        </p>
        
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using TikTok Calculator, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2>Service Description</h2>
        <ul>
          <li>TikTok Calculator is a free analytics tool for educational and research purposes</li>
          <li>We provide statistical estimates based on publicly available TikTok data</li>
          <li>All calculations are approximations and should not be considered guaranteed outcomes</li>
          <li>The service is provided &quot;as is&quot; without warranties of any kind</li>
        </ul>

        <h2>Acceptable Use</h2>
        <ul>
          <li>Use the service only for lawful purposes and in accordance with these Terms</li>
          <li>Do not attempt to interfere with the proper functioning of the service</li>
          <li>Do not use the service for commercial purposes without authorization</li>
          <li>Respect the privacy and rights of others when using the service</li>
        </ul>

        <h2>Intellectual Property</h2>
        <ul>
          <li>The TikTok Calculator service and its original content are owned by us</li>
          <li>You may not reproduce, distribute, or create derivative works without permission</li>
          <li>TikTok is a trademark of ByteDance Ltd.</li>
        </ul>

        <h2>Disclaimers</h2>
        <ul>
          <li>All estimates provided are for educational purposes only</li>
          <li>We do not guarantee the accuracy of third-party data sources</li>
          <li>Results should not be considered financial advice</li>
          <li>Actual earnings and performance may vary significantly from estimates</li>
        </ul>

        <h2>Limitation of Liability</h2>
        <p>
          We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
          including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time. We will provide notice of any 
          significant changes by posting the new Terms on this page.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us through our support channels.
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