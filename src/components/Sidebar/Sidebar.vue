<template>
    <transition name="show">
        <div class="sidebar" v-if="open">
            <button class="navbar-toggler" id="close-btn" type="button" @click="$emit('closenav')"><span>&times;</span></button>
            <transition-group appear name="fade">
                <a href="#" class="sidebar-element" v-for="(item, index) in navElements" :key="index" :style="{'--index': index}">
                    <fa-icon class="icon pe-2" :icon="['fas', item.icon[0]]" :size="item.icon[1]" />
                    <span class="nav-item">{{ item.link }}</span>
                </a>
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
                    link: 'Accueil'
                },
                {
                    icon: ['cogs', '2x'],
                    link: 'Ressources'
                },
                {
                    icon: ['th', '2x'],
                    link: 'Challenges'
                },
                {
                    icon: ['feather-alt', '2x'],
                    link: 'Blog'
                },
                {
                    icon: ['paper-plane', '2x'],
                    link: 'Contact'
                }
            ]
        }       
    },       
}
</script>

<style lang="scss" scoped :src="sidebar.scss">

</style>