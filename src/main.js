import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faHome, faCogs, faTh, faPaperPlane, faFeatherAlt } from '@fortawesome/free-solid-svg-icons'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './../assets/css/main.css'
import bootstrapBundle from '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

library.add(faBars, faHome, faCogs, faTh, faPaperPlane, faFeatherAlt)

createApp(App)
    .component('fa-icon', FontAwesomeIcon)
    .mount('#app')

//tooltip title
const tooltips = document.querySelectorAll('.tt')
tooltips.forEach(t => {
    new bootstrapBundle.Tooltip(t)
})