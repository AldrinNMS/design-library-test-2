import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const configObject = {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs',
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