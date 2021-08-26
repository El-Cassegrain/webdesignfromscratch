<template>
        <button @click="btnIndex++" class="btn main-btn" id="button">{{ btnText }}</button>
</template>

<script>
import { ref, watch } from 'vue'
//import modal from 'bootstrap/js/src/modal'

export default {
    props: [
        'clic5'
    ],
    setup(){
        const btnIndex = ref(1)
        let clic5 = false
        const button = document.getElementsByClassName('main-btn')
        watch(btnIndex, (ind) => {
            btnText.value = `Ca m'intéresse`
            switch (ind){
            case 2:
                btnIndex.value = 2
                btnText.value = 'Un peu.'
                break
            case 3:
                btnIndex.value = 3
                btnText.value = 'Beaucoup...'
                break
            case 4:
                btnIndex.value = 4
                btnText.value = 'Passionément !'
                break
            case 5:
                btnIndex.value = 5
                btnText.value = 'À la folie !!'
                clic5 = true
                forOpenModal()
                break
                
            default:
                btnIndex.value = 1
                btnText.value = 'Ca m\'intéresse'
        }
        if(ind > 5){
            btnIndex.value = 1
            
            //console.log(forOpenModal())
        }
        function forOpenModal (){
            if(clic5){
                button[0].setAttribute('data-bs-toggle', 'modal')
                button[0].setAttribute('data-bs-target', '#inscriptionModal')
                return clic5
            }else {
                return false
            }
        }
    })
    const btnText = ref('Ca m\'intéresse')
    return {
    btnIndex,
    btnText,
    }
  },
  computed(){
      
  }
}
</script>

<style lang="scss" scoped :src="../assets/css/btn-click-again.css">

</style>