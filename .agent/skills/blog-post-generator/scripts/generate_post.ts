import { GoogleGenerativeAI } from '@google/generative-ai';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env relative to the project root
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("❌ ERROR: GEMINI_API_KEY is not defined in the .env file.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function generateBentoLayout(mdxFilePath: string) {
    try {
        console.log(`🤖 Analyzing content from: ${mdxFilePath}`);
        
        // 1. Read the raw MDX content
        const absoluteMdxPath = path.resolve(process.cwd(), mdxFilePath);
        if (!fs.existsSync(absoluteMdxPath)) {
             console.error(`❌ ERROR: File not found at ${absoluteMdxPath}`);
             process.exit(1);
        }
        const mdxContent = fs.readFileSync(absoluteMdxPath, 'utf-8');

        // Extract filename to use as slug
        const filename = path.basename(absoluteMdxPath, '.mdx');
        const outputJsonPath = path.resolve(process.cwd(), `src/data/blog-layouts/${filename}.json`);

        // 2. Prepare the Gemini Prompt
        const model = genAI.getGenerativeModel({ 
            model: "gemini-2.5-flash",
            generationConfig: {
                responseMimeType: "application/json",
            }
        });

        const prompt = `
        You are an expert UI/UX designer specializing in dynamic, chaotic-yet-structured "Bento Box" grid layouts.
        Read the following blog post markdown content.
        
        Your job is to transform this linear content into a visually stunning 2D grid array format.
        
        The frontend uses a CSS Grid with 4 columns (\`grid-cols-1 md:grid-cols-4\`).
        Each item in the array MUST be a JSON object representing a "tile" or "sticker" in the grid.
        
        Allowed "type" values:
        - "title": For the main hero title of the post (usually colSpan 4).
        - "text": For paragraphs, bullet points, or sections of the markdown.
        - "quote": For pull quotes.
        - "image": For relevant images. Generate a realistic-sounding Unsplash placeholder URL if no image is in the markdown.
        - "sticker": An absolutely positioned decorative element that floats over the grid.

        Schema for each item:
        {
          "id": "unique-string-for-react-key",
          "type": "title" | "text" | "quote" | "image" | "sticker",
          "colSpan": number (1 to 4),
          "rowSpan": number (1 to 3),
          "content": "Raw markdown or text (required for title, text, quote)",
          "src": "URL (required for image, sticker)",
          "customClass": "Tailwind classes for styling, VERY IMPORTANT for 'sticker' types (e.g., 'absolute -top-4 -right-4 rotate-12 z-10 w-24')"
        }

        Rules:
        1. Break the Markdown content down into logical chunks ("text" blocks). Do NOT put the entire article in one block.
        2. Mix in "quote", "image", and "sticker" blocks creatively to break up the text.
        3. Make sure the \`colSpan\` values across a conceptual "row" add up nicely (or rely on masonry auto-flow).
        4. Make it look professional but chaotic (like Gumroad or dynamic portfolios).
        5. Return ONLY a valid JSON array matching the schema.

        Markdown Content:
        """
        ${mdxContent.substring(0, 8000)} // truncate to avoid token limits if extremely long
        """
        `;

        console.log("✨ Calling Gemini API to generate Bento Layout JSON...");
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // 3. Save the JSON Output
        const layoutData = JSON.parse(responseText); // Validate it's JSON
        
        // Ensure directory exists
        const dir = path.dirname(outputJsonPath);
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(outputJsonPath, JSON.stringify(layoutData, null, 2));
        
        console.log(`✅ Success! Bento layout saved to: src/data/blog-layouts/${filename}.json`);
        console.log(`📦 Generated ${layoutData.length} distinct layout blocks.`);

    } catch (error) {
        console.error("❌ Failed to generate layout:", error);
    }
}

// Simple CLI runner
const args = process.argv.slice(2);
if (args.length === 0) {
    console.error("Please provide the path to the .mdx file. Example: bun run generate_post.ts src/content/blog/post.mdx");
    process.exit(1);
}

generateBentoLayout(args[0]);
