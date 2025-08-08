import { Link as I18nLink } from "@/i18n/routing";
import { BlogPost } from "@/types/blog";
import dayjs from "dayjs";

export function BlogCard({ post, locale }: { post: BlogPost; locale: string }) {
  return (
    <I18nLink
      href={`/blogs/${post.slug}`}
      prefetch={false}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
    >
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
          {post.title}
        </h2>
        {post.description && (
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
            {post.description}
          </p>
        )}
        <p className="text-gray-500 dark:text-gray-500 text-xs">
          {dayjs(post.date).format("YYYY-MM-DD")}
        </p>
      </div>
    </I18nLink>
  );
}
