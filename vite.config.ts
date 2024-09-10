import path from 'path';

import react from '@vitejs/plugin-react-swc';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

import * as packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [dts({include: ['lib/']}), react(), tsConfigPaths()],
    build: {
      lib: {
        formats: ['es', 'umd'],
        name: packageJson.name,
        entry: path.resolve('lib', 'index.ts'),
        fileName: (format) => {
          return `index.${format}.js`;
        }
      },
      rollupOptions: {
        external: [...Object.keys(packageJson.peerDependencies)],
        output: {
          globals: Object.fromEntries(
            Object.keys(packageJson.peerDependencies).map((key) => {
              return [key, key];
            })
          )
        }
      }
    }
  };
});
