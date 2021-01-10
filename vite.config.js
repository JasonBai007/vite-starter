import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
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
