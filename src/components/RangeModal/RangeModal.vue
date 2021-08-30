<template>
    <!-- BS Modal -->
    <div class="modal fade" id="rangeModal" tabindex="-1" aria-labelledby="rangeModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header d-flex justify-content-center">
                    <h5 class="modal-title" id="exampleModalLabel">Faire un don</h5>
                    <button type="button" class="btn close position-absolute" data-bs-dismiss="modal"
                        aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12">
                            <Range />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Range from "./../Range/Range.vue";

    export default {
        name: 'RangeModal',
        components: {
            Range
        }
    }
</script>

<style lang="scss" scoped>
    $primary: #8bc34a;

    .modal {
        background-color: rgba(0, 0, 0, 0.75);

        .modal-content {
            background-color: white;

            .modal-header {
                display: block;

                button {
                    top: -24px;
                    ;
                    right: -32px;
                    color: $primary;

                    span {
                        font-size: 1rem;
                        padding: 4px 12px;
                        background-color: $primary;
                        color: #fff;
                        border-radius: 200px;
                        display: inline-block;
                        position: relative;
                        z-index: 0;
                    }
                }
            }

            .modal-body {
                border-color: none;
                margin-top: 25px;
            }

            .modal-footer {
                border-top: none;
            }
        }
    }
</style>