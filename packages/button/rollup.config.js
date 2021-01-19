import {
  terser
} from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
module.exports = [{
  input: 'index.js',
  output: [{
    file: 'dist/index.js',
    format: 'es' // es6的模块化方式
  }],
  plugins: [
    vue({
      css: true,  // 把单文件中css插入到html 的style标签中
      compileTemplate: true // 把组件转换成render
    }),
    terser() // 代码压缩
  ]
}]
