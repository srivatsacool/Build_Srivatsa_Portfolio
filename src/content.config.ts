import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(), // Use coerce for robust Date parsing
    author: z.string().default("Srivatsa Gorti"),
    tags: z.array(z.string()).optional(),
    layout_style: z.enum(["medium", "bento"]).default("medium"),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    link: z.string().optional(),
    github: z.string().optional(),
  }),
});

export const collections = { blog, projects };
