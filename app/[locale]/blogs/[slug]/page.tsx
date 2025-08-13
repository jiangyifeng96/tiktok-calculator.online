import { Locale, LOCALES } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Params = Promise<{ locale: string; slug: string }>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "Blogs" });

  return constructMetadata({
    page: "Blog Post",
    title: `${t("title")} - ${slug}`,
    description: t("description"),
    locale: locale as Locale,
    path: `/blogs/${slug}`,
    canonicalUrl: `/blogs/${slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "Blogs" });

  return (
    <div className="w-full md:w-3/5 px-2 md:px-12">
      <div className="prose max-w-none">
        <h1>Blog Post: {slug}</h1>
        <p className="text-muted-foreground">
          This blog post is coming soon! We are working on creating valuable content for our users.
        </p>
        <p>
          In the meantime, you can use our TikTok Calculator to analyze account performance and get insights.
        </p>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = [
    { slug: 'demo' },
    { slug: 'demo2' },
  ];
  
  const params = [];
  for (const locale of LOCALES) {
    for (const post of posts) {
      params.push({
        locale,
        slug: post.slug,
      });
    }
  }
  
  return params;
}