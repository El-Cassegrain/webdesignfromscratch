<template>
    <div>
        <header class="header-top sticky-top">
            <nav class="navbar navbar-expand-lg navbar-light p-lg-0">
                <div class="container-fluid ps-lg-0">
                    <a class="navbar-brand pt-lg-0" href="#">

                        <!-- On SM -->
                        <div class="logo-sm d-lg-none">
                            <svg id="logo-small" xmlns="http://www.w3.org/2000/svg" width="42.744" height="24.914"
                                viewBox="0 0 42.744 24.914">
                                <path id="Rectangle_11" data-name="Rectangle 11"
                                    d="M4.99,0H7.338a0,0,0,0,1,0,0V20.4a3.669,3.669,0,0,1-3.669,3.669h0A3.669,3.669,0,0,1,0,20.4V4.99A4.99,4.99,0,0,1,4.99,0Z"
                                    transform="translate(0 3.101) rotate(-25)" fill="#262d1e" />
                                <path id="Rectangle_12" data-name="Rectangle 12"
                                    d="M4.99,0H7.338a0,0,0,0,1,0,0V20.4a3.669,3.669,0,0,1-3.669,3.669h0A3.669,3.669,0,0,1,0,20.4V4.99A4.99,4.99,0,0,1,4.99,0Z"
                                    transform="translate(12.961 3.101) rotate(-25)" fill="#262d1e" />
                                <path id="Rectangle_13" data-name="Rectangle 13"
                                    d="M4.99,0H7.338a0,0,0,0,1,0,0V20.4a3.669,3.669,0,0,1-3.669,3.669h0A3.669,3.669,0,0,1,0,20.4V4.99A4.99,4.99,0,0,1,4.99,0Z"
                                    transform="translate(25.922 3.101) rotate(-25)" fill="#8bc34a" />
                            </svg>

                        </div>

                        <!-- On LG -->
                        <div class="svg-wrapper d-none d-lg-block">
                            <svg version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 141 113" style="enable-background:new 0 0 141 113;" xml:space="preserve">
                            <rect id="bg" class="st0" width="141" height="113"/>
                            <path id="left" class="st1" d="M48.7,38.8l2.8-1.3l0,0L62.9,62c1.1,2.4,0.1,5.3-2.4,6.5c0,0,0,0,0,0l0,0c-2.4,1.1-5.3,0.1-6.5-2.4
                                l-8.6-18.5C43.9,44.3,45.4,40.4,48.7,38.8C48.7,38.8,48.7,38.8,48.7,38.8z"/>
                            <path id="middle" class="st1" d="M65.8,38.8l2.8-1.3l0,0L80.1,62c1.1,2.4,0.1,5.3-2.4,6.5c0,0,0,0,0,0l0,0c-2.4,1.1-5.3,0.1-6.5-2.4
                                l-8.6-18.5C61.1,44.3,62.5,40.4,65.8,38.8C65.8,38.8,65.8,38.8,65.8,38.8z"/>
                            <path id="right" class="st2" d="M83,38.8l2.8-1.3l0,0L97.3,62c1.1,2.4,0.1,5.3-2.4,6.5c0,0,0,0,0,0l0,0c-2.4,1.1-5.3,0.1-6.5-2.4
                                l-8.6-18.5C78.3,44.3,79.7,40.4,83,38.8C83,38.8,83,38.8,83,38.8z"/>
                            </svg>
                        </div>
                    </a>

                    <span id="baseline" class="d-lg-none">Webdesignfromscratch</span>

                    <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" id="menu-button" @click="$emit('togglenav')">
                        <fa-icon :icon="['fas', 'bars']" />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto me-5">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">Accueil</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/ressources" class="nav-link">Ressources</router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Cours</a>
                            </li>
                            <li class="nav-item">
                                <router-link to="/challenges" class="nav-link">Challenges</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/blog" class="nav-link">Blog</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link">Contact</router-link>
                            </li>
                            <li class="nav-item"><button class="btn btn-soutien me-lg-4" data-bs-toggle="modal" data-bs-target="#rangeModal">Soutenir</button></li>
                        </ul>
                        
                    </div>
                </div>

                
            </nav>
            

            
        </header>

        <!-- Router view -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "HeaderTop",
    }
</script>

<style lang="css" :src="../../assets/css/header-top.css">

</style>