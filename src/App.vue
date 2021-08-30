<template>
  <HeaderTop @togglenav="navOpen = !navOpen"></HeaderTop>
  <Sidebar :open="navOpen" @closenav="navOpen = false"></Sidebar>
  <InscriptionModal></InscriptionModal>
  <RangeModal></RangeModal>
  
</template>

<script>
import HeaderTop from "./components/HeaderTop/HeaderTop.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import InscriptionModal from "./components/InscriptionModal/InscriptionModal.vue";
import RangeModal from './components/RangeModal/RangeModal.vue'

export default {
  name: 'App',
  components: {
    HeaderTop,
    Sidebar,
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
.btn-scroll{
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.55);
    padding-top: 27px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
} 
</style>
