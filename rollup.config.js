import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/angularjs-backtop.js',

  // format: 'iife', // cjs , es , iife, 
  // dest: 'dist/js/angularjs-backtop.browser.js',

  // format: 'es',
  // dest: 'dist/js/angularjs-backtop.es.js',

  format: 'cjs',
  dest: 'dist/js/angularjs-backtop.js',

  moduleName: 'AngularjsBackTop',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({exclude: 'node_modules/**'}),
    // uglify(),
  ],
};
