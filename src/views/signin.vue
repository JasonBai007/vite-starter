<template>
  <div class="signin-wrap">
    <div class="inner">
      <h1 class="animate__animated animate__rotateIn">⚡</h1>
      <h2 class="animate__animated animate__zoomInDown animate__delay-1s">Vite Admin</h2>
      <router-link to="/charts" class="animate__animated animate__fadeIn animate__delay-2s">Get Started</router-link>
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
    margin-top: 25vh;
    h1 {
      font-size: 50px;
    }
    h2 {
      font-size: 40px;
    }
  }
}
</style>