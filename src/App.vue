<template>
  <HeaderTop></HeaderTop>
  <Home></Home>
</template>

<script>
import HeaderTop from "./components/HeaderTop/HeaderTop.vue";
import Home from "./components/Home/Home.vue";

export default {
  name: 'App',
  components: {
    HeaderTop,
    Home
  }
}
</script>

<style :src="../assets/css/main.css">
</style>
