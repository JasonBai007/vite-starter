<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.<br>
    <span>ENV:{{state.mode}}</span>
  </p>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({
  count: 0,
  mode: import.meta.env.MODE, // 获取环境变量
});
</script>

<style scoped lang="scss">
// 支持scss语法，需要提前安装sass模块
a {
  color: #42b983;
}
p {
  color: #345293;
  code {
    color: blue;
  }
}
</style>