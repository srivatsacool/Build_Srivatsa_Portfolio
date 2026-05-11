import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default {
  integrations: [react(), mdx()],
  vite: {
    ssr: {
      noExternal: ['gsap'],
    },
  },
};
