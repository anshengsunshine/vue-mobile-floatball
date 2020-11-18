<template>
  <div class="to-Other-nav">
    <div @click="closeMask" class="mask" @touchmove.prevent></div>
    <div class="other-nav">
      <div>
        <img class="logo" src="@/assets/1.jpg" />
        <a href="https://www.baidu.com/">百度一下</a>
      </div>
      <div>
        <img class="logo" src="@/assets/1.jpg" />
         <a href="https://www.baidu.com/">百度一下</a>
      </div>
      <div>
        <img class="logo" src="@/assets/1.jpg" />
         <a href="https://www.baidu.com/">百度一下</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "toOntherNav",
  methods: {
    closeMask() {
      this.$emit("handleCloseMask");
    },
  },
};
</script>
<style scoped>
.to-Other-nav {
  height: 100vh;
}
.mask {
  width: 100vw;
  height: 100vh;
  z-index: 10001;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.8);
}
.other-nav {
  width: 67%;
  position: fixed;
  right: 0;
  bottom: 10rem;
  z-index: 10001;
}
.other-nav div {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0.8rem 0;
  padding: 0.3rem;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  background-color: #fff;
}
.other-nav .logo {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}
.other-nav a {
  display: block;
  padding-left: 0.5rem;
  font-size: 1rem;
  color: #333;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
