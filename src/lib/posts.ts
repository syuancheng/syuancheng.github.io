import type { MarkdownInstance } from 'astro';

export type BlogFrontmatter = {
  slug?: string;
  title: string;
  author?: string;
  tags?: string[];
};

const modules = import.meta.glob<MarkdownInstance<BlogFrontmatter>>('../../blog/*.md', {
  eager: true,
});

function dateFromPath(path: string): string {
  const match = path.match(/(\d{4}-\d{2}-\d{2})/);
  return match?.[1] ?? '1970-01-01';
}

function pathSlug(path: string): string {
  return path
    .split('/')
    .pop()
    ?.replace(/^\d{4}-\d{2}-\d{2}-/, '')
    .replace(/\.md$/, '') ?? path;
}

export const posts = Object.entries(modules)
  .map(([path, post]) => {
    const date = dateFromPath(path);
    const slug = post.frontmatter.slug ?? pathSlug(path);

    return {
      ...post,
      date,
      slug,
      href: `/${encodeURIComponent(slug)}/`,
      title: post.frontmatter.title,
      author: post.frontmatter.author ?? 'Syuan',
      tags: post.frontmatter.tags ?? [],
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export type BlogPost = (typeof posts)[number];

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(`${date}T00:00:00Z`));
}
