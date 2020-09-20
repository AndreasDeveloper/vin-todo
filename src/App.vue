<template>
  <div id="app">
    <template v-if="hasLayout">
      <Navbar />
    </template>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/core/Navbar";

export default {
  components: {
    Navbar,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "Vin";
      },
    },
  },
};
</script>

<style lang="scss">
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
