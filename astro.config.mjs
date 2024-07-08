import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  redirects: {
    '/todo': {
      status: 307,
      destination: '/todo'
    }
  }
});