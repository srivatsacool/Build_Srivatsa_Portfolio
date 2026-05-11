---
description: Automatically generate blog post content and a corresponding Gemini-powered randomized Bento Grid layout JSON.
---

# blog-post-generator

This skill defines the process for generating new blog posts complete with an AI-designed bento grid layout. 

## When to Use
Use this skill when the user asks to "create a new blog post", "generate an article about X", or explicitly invokes the `Blog_post_generator` skill.

## 🔴 CRITICAL: The Layout System
This portfolio uses a highly custom Bento Grid layout for its blog posts. Standard Markdown rendering is bypassed. Therefore, every single new `.mdx` file MUST have a corresponding `.json` layout file generated in `src/data/blog-layouts/[slug].json`.

## The Workflow

When generating a new post, you must execute the following two steps in order:

### 1. Generate the Markdown Content
First, use your standard writing capabilities (using `write_to_file`) to create the rich `.mdx` file in `src/content/blog/[slug].mdx`. Ensure it has proper frontmatter.

### 2. Generate the Bento JSON Layout
After the `.mdx` file is written, you MUST run the dedicated generation script to ask Gemini to map the content into a beautiful bento grid.

Run the following command:
```bash
bun run .agent/skills/blog-post-generator/scripts/generate_post.ts "src/content/blog/[slug].mdx"
```

*Substitute `[slug]` with the actual filename you just created.*

### 3. Verify
Once the script completes, verify that `src/data/blog-layouts/[slug].json` was created successfully. If it failed, debug the script output.
