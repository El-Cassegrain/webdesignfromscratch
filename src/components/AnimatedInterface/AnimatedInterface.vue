<template>
    <div id="animated-interface" class="wrapper">
        <svg width="293" height="333.376" viewBox="0 0 293 333.376">
            <g id="user-interface" transform="translate(-881 -248.624)">
                <g id="interface" transform="translate(881.225 248.624)" fill="#fff" stroke="#cfcfcf" stroke-width="1">
                <rect width="292.551" height="332.976" rx="4" stroke="none"/>
                <rect x="0.5" y="0.5" width="291.551" height="331.976" rx="3.5" fill="none"/>
                </g>
                <circle id="red" cx="6.383" cy="6.383" r="6.383" transform="matrix(1, -0.017, 0.017, 1, 895.59, 264.069)" fill="#eb1d1d"/>
                <circle id="yellow" cx="6.383" cy="6.383" r="6.383" transform="matrix(1, -0.017, 0.017, 1, 914.735, 263.735)" fill="#ebe41d"/>
                <circle id="green" cx="6.383" cy="6.383" r="6.383" transform="matrix(1, -0.017, 0.017, 1, 933.881, 263.401)" fill="#4ac356"/>
                <g id="icon" data-name="Icon feather-image" transform="translate(1005.131 314.981)">
                <path id="Tracé_2" data-name="Tracé 2" d="M7.691,4.5h22.34a3.191,3.191,0,0,1,3.191,3.191v22.34a3.191,3.191,0,0,1-3.191,3.191H7.691A3.191,3.191,0,0,1,4.5,30.032V7.691A3.191,3.191,0,0,1,7.691,4.5Z" transform="translate(-4.5 -4.5)" fill="none" stroke="#b3b8ad" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path id="Tracé_3" data-name="Tracé 3" d="M15.287,12.894A2.394,2.394,0,1,1,12.894,10.5,2.394,2.394,0,0,1,15.287,12.894Z" transform="translate(-4.117 -4.117)" fill="none" stroke="#b3b8ad" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path id="Tracé_4" data-name="Tracé 4" d="M33.032,22.979,25.053,15,7.5,32.553" transform="translate(-4.309 -3.83)" fill="none" stroke="#b3b8ad" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </g>
                <g id="background" transform="translate(881 401)" fill="#b3b8ad" stroke="#e3e4e1" stroke-width="1">
                <path d="M0,0H293a0,0,0,0,1,0,0V177a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V0A0,0,0,0,1,0,0Z" stroke="none"/>
                <path d="M1,.5H292a.5.5,0,0,1,.5.5V177a3.5,3.5,0,0,1-3.5,3.5H4A3.5,3.5,0,0,1,.5,177V1A.5.5,0,0,1,1,.5Z" fill="none"/>
                </g>
                <rect id="line1" width="118" height="22" rx="11" transform="translate(915 428)" fill="#eef5e7"/>
                <rect id="line2" width="208" height="22" rx="11" transform="translate(915 465)" fill="#fff"/>
                <rect id="line3" width="200" height="23" rx="11" transform="translate(915 502)" fill="#fff"/>
            </g>
        </svg>
    </div>
</template>

<script scoped>
import gsap from 'gsap'

export default {
  name: 'AnimatedInterface',
  data() {
      return {
          
      }
  },
  mounted: function(){
      let tl = gsap.timeline({
              defaults:{
                  duration: .7, 
                  //ease: "power2.in",
                  opacity: 0
                  }
                });
          tl.from("#interface", {delay: 1, scale: .2, transformOrigin: 'center'}, "=.2")
          tl.from("#icon", {scale: .2, transformOrigin: 'center'}, "-=.7")
          tl.from("#line1", {scaleX:0})
          tl.from("#line2", {scaleX:0}, "-=.2")
          tl.from("#line3", {scaleX:0}, "-=.3")
          tl.from("#red", {scaleX:0}, "-=.5")
          tl.from("#yellow", {scaleX:0}, "-=.9")
          tl.from("#green", {scaleX:0}, "-=.9");
        
        let tl2 = gsap.timeline({
            defaults:{
                duration: 1.5, 
                delay:1.12
                }
            });
          tl2.to(".wrapper", {y: 8, repeat: -1, yoyo:true});
          
        let tl3 = gsap.timeline({
            defaults:{
                duration: 1.5
                }
            })
          tl3.from("#background", { opacity: 0, y: 1, stagger: .3});  
    }
}
</script>

<style scoped :src="../assets/css/interface-animated"> 

</style>