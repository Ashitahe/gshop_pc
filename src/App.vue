<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  created() {
      this.$store.dispatch('getCategoryList');
      this.$store.dispatch('getBannerList');
  },
};
const a = 100;
</script>

<style lang="less" scoped></style>
