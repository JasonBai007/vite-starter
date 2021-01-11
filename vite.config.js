import vue from '@vitejs/plugin-vue'
import path from 'path'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  // 路径别名
  alias: {
    '@': path.resolve(__dirname, './src')
  },
  plugins: [vue()],
  // vite 在执行 runOptimize 的时候中会使用 rollup 对 axios 包重新编译，
  // 将编译成符合 esm 模块规范的新的包放入 node_modules 下的 .vite_opt_cache 中，
  // 然后配合 resolver 对 axios 的导入进行处理：
  // 使用编译后的包内容代替原来 axios 的包的内容，
  // 这样就解决了 vite 中不能使用 cjs 包的问题，
  // 这部分代码在  depOptimizer.ts 里。
  // 优化依赖
  optimizeDeps: {
    include: ["axios", "echarts"]
  },
  server: {
    open: true, // 启动自动打开浏览器
    // 开发环境请求代理
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true
      }
    }
  }
}
