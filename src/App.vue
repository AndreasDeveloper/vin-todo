<template>
  <div id="app">
    <template v-if="hasLayout">
      <SideNav />
    </template>
    <template v-if="!hasLayout && $route.path !== '/login'">
      <Navbar />
    </template>
    <router-view />
  </div>
</template>

<script>
import SideNav from "./components/core/SideNav";
import Navbar from "./components/core/Navbar";

export default {
  components: {
    SideNav,
    Navbar
  },
  computed: {
    hasLayout() {
      return this.$route.meta.hasLayout;
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/main.scss';

#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-font;
}
body {
  padding: 0;
  margin: 0;
}
</style>
