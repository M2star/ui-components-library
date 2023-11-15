import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const packageJson = require('./package.json')

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs'
        },
        {
            file: packageJson.module,
            format: 'esm'
        }
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve(), commonjs()],
    external: ['react', 'react-dom']
};
