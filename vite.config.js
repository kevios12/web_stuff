import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
    base: '/',
    root: resolve(__dirname, 'src'),
    assetsInclude: ["./assets/**/*.*"],
    resolve: {
        alias: {
          '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
          '~jquery': resolve(__dirname, 'node_modules/jquery')
        }
      },
    server: {
        port: 8080,
        hot: true
      },
    build: {
        emptyOutDir: true,
        outDir: '../dist',
        rollupOptions: {
            input: {
                jquery: resolve(__dirname, "./node_modules/jquery/dist/jquery.js"),
            }
    }
}})
