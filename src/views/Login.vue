<template>
  <div class="login">
    <div class="login__left">
      <div class="login__left__content">
        <h1>Security. Freedom. Creativity.</h1>
        <h2>One place. Multiple benefits.</h2>
      </div>
    </div>
    <div class="login__right">
      <div class="login__right__content">
        <h3>Login to <span class="vin-font">Vin</span></h3>
        <form>
          <input type="email" name="email" placeholder="Email Address" required>
          <input type="password" name="password" placeholder="Password" required>
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
  metaInfo: {
    title: 'Login | Vin',
    meta: [
      { name: 'description', content: 'Login to Vin now and get access to multiple benefits on one place.' },
      { name: 'author', content: 'Vin | AndreasDEV' },
      { name: "og:title", property: "og:title", content: "Login | Vin" },
      { name: "og:type", property: "og:type", content: "website" },
      { name: "og:description", property: "og:description", content: "Login to Vin now and get access to multiple benefits on one place." },
    ]
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/base/_mixins.scss';
@import '@/styles/pages/_login.scss';
</style>