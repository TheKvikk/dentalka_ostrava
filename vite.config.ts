import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.PROD_ENV === 'gh-pages' ? '/dentalka_ostrava/' : '/',
});
