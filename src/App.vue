<template>
  <HeaderTop @togglenav="navOpen = !navOpen"></HeaderTop>
  <Sidebar :open="navOpen" @closenav="navOpen = false"></Sidebar>
  <Home></Home>
  <InscriptionModal></InscriptionModal>
  <RangeModal></RangeModal>
  
</template>

<script>
import HeaderTop from "./components/HeaderTop/HeaderTop.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Home from "./components/Home/Home.vue";
import InscriptionModal from "./components/InscriptionModal/InscriptionModal.vue";
import RangeModal from './components/RangeModal/RangeModal.vue'

export default {
  name: 'App',
  components: {
    HeaderTop,
    Sidebar,
    Home,
    InscriptionModal,
    RangeModal
  },
  data: () => {
      return {
          navOpen: false,
      }
  }
}
</script>

<style :src="../assets/css/main.css">
</style>
