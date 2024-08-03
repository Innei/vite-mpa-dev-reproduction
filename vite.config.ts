import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'

const pkg = JSON.parse(readFileSync('package.json', 'utf8'))
const __dirname = fileURLToPath(new URL('.', import.meta.url))

const ROOT = './src/renderer'

export default defineConfig({
  build: {
    outDir: resolve(__dirname, 'out/web'),
    target: 'ES2022',

    rollupOptions: {
      input: {
        loginxxxxxx: resolve(ROOT, 'src/external/login/index.html'),
        main: resolve(ROOT, 'index.html'),
      },
    },
  },
  root: ROOT,
  envDir: resolve(__dirname, '.'),

  base: '/',

  plugins: [],
  define: {},
})
