import { defineConfig } from 'vite';

function copyrightYearPlugin() {
  return {
    name: 'year',
    transformIndexHtml(html: string) {
      return html.replace('__YEAR__', new Date().getFullYear().toString());
    },
  };
}

export default defineConfig({
  base: '/dentalka_ostrava/',
  plugins: [copyrightYearPlugin()],
});
