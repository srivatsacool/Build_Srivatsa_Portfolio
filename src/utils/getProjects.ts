import fs from 'node:fs';
import path from 'node:path';

export interface Project {
  order: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  description: string; // alias for shortDescription (used by grid cards)
  image?: string;
  tags?: string[];
  techStack?: string[];
  repoUrl?: string;
  demoUrl?: string;
  slug: string;
  link: string;
  isMarkdown: boolean;
  [key: string]: any;
}

/** Convert a project title to a URL-safe slug */
function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Parse projects.md and return projects in exact file order */
export async function getProjects(): Promise<Project[]> {
  const projectRoot = path.resolve(process.cwd());
  const mdPath = path.join(projectRoot, 'projects.md');
  const raw = fs.readFileSync(mdPath, 'utf-8');

  const projects: Project[] = [];
  const blocks = raw.split(/\n---\n/);
  let order = 0;

  for (const block of blocks) {
    // Only process blocks with a numbered project heading
    const titleMatch = block.match(/^##\s+\d+\.\s+(.+)$/m);
    if (!titleMatch) continue;

    const title = titleMatch[1].trim();
    order += 1;

    // Tags
    const tagsMatch = block.match(/\*\*Tags:\*\*\s*(.+)/);
    const tags = tagsMatch
      ? tagsMatch[1]
          .split('·')
          .map((t) => t.replace(/`/g, '').trim())
          .filter(Boolean)
      : [];

    // Hero Image
    const imageMatch = block.match(/\*\*Hero Image:\*\*\s*`(.+?)`/);
    const image = imageMatch ? imageMatch[1].trim() : undefined;

    // Short Description (one-line after **Short Description:**)
    const shortMatch = block.match(
      /\*\*Short Description:\*\*\s*\n([\s\S]+?)(?=\n\*\*Long Description|\n\*\*Tech Stack|\n\*\*GitHub|\n\*\*Live Demo|\n---|\n$|$)/
    );
    const shortDescription = shortMatch
      ? shortMatch[1].replace(/\n/g, ' ').trim()
      : '';

    // Long Description (rich paragraph after **Long Description:**)
    const longMatch = block.match(
      /\*\*Long Description:\*\*\s*\n([\s\S]+?)(?=\n\*\*Tech Stack|\n\*\*GitHub|\n\*\*Live Demo|\n---|\n$|$)/
    );
    // Fall back to short description if no long description
    const longDescription = longMatch
      ? longMatch[1].replace(/\n/g, ' ').trim()
      : shortDescription;

    // Tech Stack (comma-separated after **Tech Stack:**)
    const techMatch = block.match(/\*\*Tech Stack:\*\*\s*(.+)/);
    const techStack = techMatch
      ? techMatch[1].split(',').map((t) => t.trim()).filter(Boolean)
      : [];

    // GitHub repo URL
    const githubMatch = block.match(/\*\*GitHub:\*\*\s*\[.+?\]\((.+?)\)/);
    const repoUrl = githubMatch ? githubMatch[1].trim() : undefined;

    // Live Demo URL (only when an actual href exists)
    const demoMatch = block.match(/\*\*Live Demo:\*\*\s*\[.+?\]\((.+?)\)/);
    const demoUrl = demoMatch ? demoMatch[1].trim() : undefined;

    const slug = toSlug(title);

    projects.push({
      order,
      title,
      shortDescription,
      longDescription,
      description: shortDescription, // card-facing alias
      image,
      tags,
      techStack,
      repoUrl,
      demoUrl,
      slug,
      link: `/projects/${slug}`,
      isMarkdown: false,
    });
  }

  return projects;
}
