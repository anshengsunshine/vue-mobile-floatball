<template>
  <div id="app">
    <FloatBall @goNextNav="handleShowNav" />
    <toOtherNav @handleCloseMask="handleCloseMask" v-show="isShowNav" />
  </div>
</template>

<script>
import FloatBall from "./components/FloatBall";
import toOtherNav from "./components/toOtherNav";

export default {
  name: "app",
  components: {
    FloatBall,
    toOtherNav,
  },
  data() {
    return {
      isShowNav: false,
    };
  },
  methods: {
    handleShowNav() {
      this.isShowNav = true;
    },
    handleCloseMask() {
      this.isShowNav = false;
    },
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
