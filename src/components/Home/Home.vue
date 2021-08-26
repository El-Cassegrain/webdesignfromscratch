<template>
    <div class="container">

        <!-- Hero-section -->
        <section id="hero">
            <div
                class="row mt-xl-5 bg-watermark flex-column justify-content-center align-items-center flex-lg-row flex-lg-row-reverse">
                <div class="col-12 col-lg-5 text-center mt-lg-4">
                    <AnimatedInterface></AnimatedInterface>
                </div>

                <div class="col-12 col-lg-7 mt-lg-5 pt-lg-3">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h1 class="title">Webdesign <br><span id="title2" class="title2 tt" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="À partir de rien">fromscratch</span></h1>
                        </div>
                    </div>
                    <div class="row justify-content-sm-center justify-content-xl-start max-width pe-xxl-0 ms-xxl-5">
                        <div
                            class="col-12 col-sm-10 px-lg-2 px-xxl-5 col-xl-12 mt-5 px-4 px-md-3 text-left px-lg-4 pe-xxl-0">
                            <p class="subtitle">
                                L'espace francophone dédié à l'apprentissage du design web à partir de rien !
                            </p>
                            <p class="d-none d-sm-inline">
                                Ce site recense des ressources autour de thèmes comme le design d'interface (UI),
                                l'expérience utilisateur (UX), et le graphisme appliqué au web.
                            </p>
                        </div>
                    </div>
                    <div
                        class="row justify-content-center justify-content-xl-start mt-3 mt-lg-4 max-width pe-xxl-0 ms-xxl-5 pt-sm-2 px-lg-2 mx-lg-1 px-xxl-5">
                        <div
                            class="col-12 col-lg-6 col-xl-4 col-xxl-4 text-center text-lg-start pe-lg-0 ps-lg-5 ps-xl-0 ps-xxl-2">
                            <BtnClickAgain @clic5="openModal"></BtnClickAgain>
                        </div>
                        <div class="col-12 col-lg-6 col-xl-5 text-center text-lg-start mt-3 mt-lg-0 mb-5 ps-lg-3"><a
                                href="#" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#rangeModal">Soutenir le projet</a></div>
                    </div>
                </div>
            </div>
        </section>
        <RangeModal></RangeModal>
    </div>
</template>

<script>
    import AnimatedInterface from '../AnimatedInterface/AnimatedInterface.vue'
    import BtnClickAgain from '../BtnClickAgain/BtnClickAgain.vue'
    import RangeModal from '../RangeModal/RangeModal.vue'
    
    export default {
        props: [
            'openModal'
        ],
        name: "Home",
        components: {
            AnimatedInterface,
            BtnClickAgain,
            RangeModal
        },
        data() {
            return {
                inscriptionModal: document.getElementById('inscriptionModal')
            }
        }

    }
</script>

<style lang="scss" :src="home.scss">

</style>