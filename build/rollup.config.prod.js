import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    file: 'index.js',
    format: 'umd',
    name: 'FlexboxgridVue',
    exports: 'named',
    globals: 'FlexboxgridVue',
  },
  plugins: [
    postcss(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
  external: ['vue'],
};
