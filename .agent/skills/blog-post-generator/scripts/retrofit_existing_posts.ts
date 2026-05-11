import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.resolve(process.cwd(), 'src/content/blog');
const scriptPath = path.resolve(__dirname, 'generate_post.ts');

async function retrofit() {
    console.log("🚀 Starting Retrofit of existing .mdx files...");
    
    if (!fs.existsSync(contentDir)) {
         console.error(`❌ ERROR: Directory not found at ${contentDir}`);
         process.exit(1);
    }

    const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.mdx'));
    
    if (files.length === 0) {
        console.log("No .mdx files found to retrofit.");
        return;
    }

    console.log(`Found ${files.length} posts to process.\n`);

    for (const file of files) {
        const filePath = path.join('src/content/blog', file);
        console.log(`-----------------------------------`);
        console.log(`🔄 Processing: ${file}`);
        
        try {
            // Execute the individual generator script
            execSync(`bun run ${scriptPath} "${filePath}"`, { stdio: 'inherit' });
            
            // Add a delay to avoid rate limiting on free tier
            if (file !== files[files.length - 1]) {
                console.log(`⏱️ Waiting 5 seconds before next request to avoid rate limits...`);
                Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 5000);
            }
        } catch (error) {
             console.error(`❌ Failed processing ${file}. Continuing to next...`);
        }
    }
    
    console.log(`\n🎉 Retrofit complete! All existing posts now have Bento Layout JSONs.`);
}

retrofit();
