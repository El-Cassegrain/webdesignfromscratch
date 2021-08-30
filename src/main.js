import { createApp } from 'vue'
import { createRouter, createWebHistory } from './../node_modules/vue-router/dist/vue-router.esm-bundler'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faHome, faCogs, faTh, faPaperPlane, faFeatherAlt, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './../assets/css/main.css'
import bootstrapBundle from '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

//Components
import Home from './components/Home/Home.vue'
import Ressources from './components/Ressources/Ressources.vue'
import Challenges from './components/Challenges/Challenges.vue'
import Blog from './components/Blog/Blog.vue'
import Contact from './components/Contact/Contact.vue'

library.add(faBars, faHome, faCogs, faTh, faPaperPlane, faFeatherAlt, faAngleDoubleUp)

//Routing
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/ressources',
        component: Ressources
      },
      {
        path: '/challenges',
        component: Challenges
      },
      {
        path: '/blog',
        component: Blog
      },
      {
        path: '/contact',
        component: Contact
      },
    ]
  })

  export default router

createApp(App)
    .component('fa-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')

//tooltip title
const tooltips = document.querySelectorAll('.tt')
tooltips.forEach(t => {
    new bootstrapBundle.Tooltip(t)
})

