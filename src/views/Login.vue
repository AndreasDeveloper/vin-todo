<template>
  <div class="login">
    <div class="login__left">
      <div class="login__left__content">
        <a href="/"><span class="vin-font">Vin</span></a>
        <h1>Security. Freedom. Creativity.</h1>
        <h2>One place. Multiple benefits.</h2>
      </div>
    </div>
    <div class="login__right">
      <div class="login__right__content">
        <h3>Login to <span class="vin-font">Vin</span></h3>
        <form>
          <input type="email" name="email" placeholder="Email Address">
          <input type="password" name="password" placeholder="Password">
          <input type="submit" value="Login" class="btn-nature">
        </form>
        <h4>Don't have an account? <a href="#">Sign up.</a></h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style lang="scss" scoped>
@import '@/styles/base/_mixins.scss';
@import '@/styles/pages/_login.scss';
</style>