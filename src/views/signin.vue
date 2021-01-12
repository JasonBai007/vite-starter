<template>
  <div class="signin-wrap">
    <div class="inner">
      <h1 class="animate__animated animate__rotateIn">⚡</h1>
      <h2 class="animate__animated animate__zoomInDown animate__delay-1s">Vite Admin</h2>
      <router-link to="/charts" class="animate__animated animate__fadeIn animate__delay-2s">
        <el-button size="small" type="primary">Get Started</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "signin",
  data() {
    return {};
  },
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
      margin-bottom: 15px;
    }
  }
}
</style>