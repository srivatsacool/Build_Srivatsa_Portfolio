import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default {
  integrations: [react(), mdx()],
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
  },
};
