<template>
    <transition name="show">
        <div class="sidebar" v-if="open">
            <button class="navbar-toggler" id="close-btn" type="button" @click="$emit('closenav')"><span>&times;</span></button>
            <transition-group appear name="fade" v-for="(item, index) in navElements" :key="index" :style="{'--index': index}">
                <router-link :to="item.to" class="sidebar-element">          
                    <fa-icon class="icon pe-2" :icon="['fas', item.icon[0]]" :size="item.icon[1]" />
                    <span class="nav-item">{{ item.link }}</span>
                </router-link>
            </transition-group>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Sidebar',
    props: [
        'open',
        'closenav'
    ],
    data: () => {
        return {
            navElements: [ 
                {
                    icon: ['home', '2x'],
                    link: 'Accueil',
                    to: '/'
                },
                {
                    icon: ['cogs', '2x'],
                    link: 'Ressources',
                    to: '/ressources'
                },
                {
                    icon: ['th', '2x'],
                    link: 'Challenges',
                    to: '/challenges'
                },
                {
                    icon: ['feather-alt', '2x'],
                    link: 'Blog',
                    to: '/blog'
                },
                {
                    icon: ['paper-plane', '2x'],
                    link: 'Contact',
                    to: '/contact'
                }
            ]
        }       
    },       
}
</script>

<style lang="scss" scoped :src="sidebar.scss">

</style>