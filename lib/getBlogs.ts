import { DEFAULT_LOCALE } from '@/i18n/routing';
import { BlogPost } from '@/types/blog';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const POSTS_BATCH_SIZE = 10;

export async function getPosts(locale: string = DEFAULT_LOCALE): Promise<{ posts: BlogPost[] }> {
  const postsDirectory = path.join(process.cwd(), 'blogs', locale);

  // is directory exist
  if (!fs.existsSync(postsDirectory)) {
    return { posts: [] };
  }

  let filenames = await fs.promises.readdir(postsDirectory);
  filenames = filenames.reverse();

  let allPosts: BlogPost[] = [];

  // read file by batch
  for (let i = 0; i < filenames.length; i += POSTS_BATCH_SIZE) {
    const batchFilenames = filenames.slice(i, i + POSTS_BATCH_SIZE);

    const batchPosts: BlogPost[] = await Promise.all(
      batchFilenames.map(async (filename) => {
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = await fs.promises.readFile(fullPath, 'utf8');

        const { data, content } = matter(fileContents);

        return {
          locale,
          title: data.title,
          description: data.description,
          date: data.date,
          slug: data.slug,
          content,
          metadata: data,
        };
      })
    );

    allPosts.push(...batchPosts);
  }

  // sort posts by date (newest first)
  allPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    posts: allPosts,
  };
}