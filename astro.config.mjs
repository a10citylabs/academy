import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  // GitHub Pages configuration
  // Update these for your deployment:
  // - For https://<username>.github.io/<repo>/ use both site and base
  // - For custom domain, set site only and remove base
  site: 'https://a10city.github.io',
  base: '/academy/',
  integrations: [
    starlight({
      title: 'A10city Academy',
      description: 'Learn about digital authenticity, content provenance, and the future of trust in the AI age.',
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: true,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/a10city' },
        { icon: 'x.com', label: 'X/Twitter', href: 'https://twitter.com/a10city' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/a10city' },
      ],
      customCss: [
        '@fontsource/space-grotesk/400.css',
        '@fontsource/space-grotesk/500.css',
        '@fontsource/space-grotesk/600.css',
        '@fontsource/space-grotesk/700.css',
        '@fontsource/dm-sans/400.css',
        '@fontsource/dm-sans/500.css',
        '@fontsource/dm-sans/600.css',
        '@fontsource/jetbrains-mono/400.css',
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Welcome',
          items: [
            { label: 'Getting Started', link: '/' },
            { label: 'About A10city Academy', link: '/about' },
          ],
        },
        {
          label: 'Courses',
          items: [
            { label: 'Digital Authenticity', link: '/courses/digital-authenticity' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'C2PA Standards', link: '/resources/c2pa' },
            { label: 'Tools & Verification', link: '/resources/tools' },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#0d2137',
            media: '(prefers-color-scheme: dark)',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#f8fafc',
            media: '(prefers-color-scheme: light)',
          },
        },
      ],
      components: {
        // Custom components can be added here
      },
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
        styleOverrides: {
          borderRadius: '0.5rem',
        },
      },
    }),
  ],
});