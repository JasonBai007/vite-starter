<template>
  <h1>{{ msg }}</h1>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    <span>The ENV: {{state.mode}}</span>
  </p>
</template>

<script>
import { defineProps, reactive } from "vue";
export default {
  props: ["msg"],
  setup() {
    const state = reactive({
      count: 0,
      mode: import.meta.env.MODE, // 获取环境变量
    });
    return {
      state,
    };
  },
  created() {
    // 请求示例
    this.$http.get("someData").then((res) => {
      console.log(res);
    });
  },
};
</script>

<style scoped lang="scss">
// 支持scss语法，需要提前安装sass模块
h1 {
  font-weight: bold;
}
</style>