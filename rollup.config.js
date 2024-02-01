import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { dts } from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss'

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: 'inline', // or set to 'true' if you want external sourcemap files
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: 'inline', // or set to 'true' if you want external sourcemap files
      },
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve(), commonjs(), postcss()],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm', sourcemap: 'inline' }],
    plugins: [dts()],
    external:[/\.css$/]
  },
];
