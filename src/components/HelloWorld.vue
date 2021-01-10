<template>
  <h1>{{ msg }}</h1>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    <span>The ENV: {{state.mode}}</span>
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
h1 {
  font-weight: bold;
}
</style>