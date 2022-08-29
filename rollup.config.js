import path from 'path';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const getPath = (_path) => path.resolve(__dirname, _path);

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

/** @type {import('rollup').RollupOptions} */
const options = {
  input: getPath('src/index.ts'),
  output: [
    {
      file: getPath(pkg.main),
      name: 'xcall',
      format: 'cjs',
      plugins: [terser()]
    },
    {
      file: getPath(pkg.module),
      name: 'xcall',
      format: 'es',
      plugins: [terser()]
    },
    {
      file: getPath(pkg.unpkg),
      name: 'xcall',
      format: 'umd',
      plugins: [terser()]
    },
    {
      file: getPath(pkg.iife),
      name: 'xcall',
      format: 'umd',
      plugins: [terser()]
    },
    {
      file: getPath(pkg['main-source']),
      name: 'xcall',
      format: 'cjs' // lib
    },
    {
      file: getPath(pkg['module-source']),
      name: 'xcall',
      format: 'es' // es
    },
    {
      file: getPath(pkg['unpkg-source']),
      name: 'xcall',
      format: 'umd' // dist
    },
    {
      file: getPath(pkg['iife-source']),
      name: 'xcall',
      format: 'umd' // iife
    }
  ],
  plugins: [resolve(extensions), commonjs(), typescript({ tsconfig: getPath('tsconfig.json'), extensions })]
};
export default options;
