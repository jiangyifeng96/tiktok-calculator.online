import { Locale, LOCALES } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Params = Promise<{ locale: string }>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blogs" });

  return constructMetadata({
    page: "Blogs",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/blogs`,
    canonicalUrl: `/blogs`,
  });
}

export default async function BlogsPage({ params }: { params: Params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blogs" });

  return (
    <div className="w-full px-2 md:px-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t("title")}</h1>
        <p className="text-muted-foreground mt-2">
          {t("description")}
        </p>
      </div>
      
      <div className="prose max-w-none">
        <p>Blog section is coming soon! We are working on bringing you valuable content about:</p>
        <ul>
          <li>TikTok analytics best practices</li>
          <li>Social media performance optimization</li>
          <li>Content creator insights and tips</li>
          <li>Platform trends and updates</li>
        </ul>
        <p>Stay tuned for updates!</p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}