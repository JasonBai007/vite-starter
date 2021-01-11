<template>
  <div class="signin-wrap">
    <div class="inner">
      <h1>Vite⚡</h1>
      <router-link to="/charts">Get Started</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "signin",
};
</script>

<style scoped lang="scss">
.signin-wrap {
  height: 100vh;
  display: flex;
  .inner {
    margin: auto;
    margin-top: 30vh;
    h1 {
      font-size: 50px;
    }
  }
}
</style>