import { Callout } from "@/components/mdx/Callout";
import MDXComponents from "@/components/mdx/MDXComponents";
import { Locale, LOCALES } from "@/i18n/routing";
import { getPosts } from "@/lib/getBlogs";
import { constructMetadata } from "@/lib/metadata";
import { BlogPost } from "@/types/blog";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { notFound } from "next/navigation";
import dayjs from "dayjs";

type Params = Promise<{
  locale: string;
  slug: string;
}>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale, slug } = await params;
  let { posts }: { posts: BlogPost[] } = await getPosts(locale);
  const post = posts.find((post) => post.slug === "/" + slug);

  if (!post) {
    return constructMetadata({
      title: "404",
      description: "Page not found",
      noIndex: true,
      locale: locale as Locale,
      path: `/blogs/${slug}`,
      canonicalUrl: `/blogs/${slug}`,
    });
  }

  return constructMetadata({
    page: "blogs",
    title: post.title,
    description: post.description,
    locale: locale as Locale,
    path: `/blogs/${slug}`,
    canonicalUrl: `/blogs/${slug}`,
  });
}

export default async function BlogPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  let { posts }: { posts: BlogPost[] } = await getPosts(locale);

  const post = posts.find((item) => item.slug === "/" + slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="w-full md:w-3/5 px-2 md:px-12">
      <article className="prose dark:prose-invert max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {dayjs(post.date).format("YYYY-MM-DD")}
          </p>
        </header>
        
        {post.description && <Callout>{post.description}</Callout>}
        
        <div className="mt-8">
          <MDXRemote source={post?.content || ""} components={MDXComponents} />
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  let posts = (await getPosts()).posts;

  // Filter out posts without a slug
  posts = posts.filter((post) => post.slug);

  return LOCALES.flatMap((locale) =>
    posts.map((post) => {
      const slugPart = post.slug.replace(/^\//, "").replace(/^blogs\//, "");

      return {
        locale,
        slug: slugPart,
      };
    })
  );
}
