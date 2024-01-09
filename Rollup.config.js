import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const configObject = {
  input: 'dist/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'design-library-test-2',
  },
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        'react-dom/client': ['createRoot'],
      },
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  external: [],
};

export default configObject;