<template>
  <div class="app-content mt-3">
    <Slider v-model="value" />
    <div class="row justify-content-center mt-4">
        <div class="col-4 text-center">
            <button type="button" class="btn main-btn">Valider</button>
        </div>
    </div>
  </div>
</template>
<script>
import Slider from '@vueform/slider'
 
export default {
  data() {
    return {
      value: 20,
      id: {
        type: [String, Number],
        required: false,
        },
        disabled: {
        type: Boolean,
        required: false,
        default: false,
        },
        min: {
        type: Number,
        required: false,
        default: 0
        },
        max: {
        type: Number,
        required: false,
        default: 100
        },
        step: {
        type: Number,
        required: false,
        default: 1
        },
        orientation: {
        type: String,
        required: false,
        default: 'horizontal',
        },
        direction: {
        type: String,
        required: false,
        default: 'ltr',
        },
        tooltips: {
        type: Boolean,
        required: false,
        default: true,
        },
        options: {
        type: Object,
        required: false,
        default: () => ({})
        },
        merge: {
        type: Number,
        required: false,
        default: -1
        },
        format: {
        type: true,
        required: false,
        default: '€',
        },
        classes: {
        type: Object,
        required: false,
        default: () => ({}),
        },
        showTooltip: {
        type: String,
        required: false,
        default: 'always'
        }
      }
    },
  components: {
    Slider
  }
}
</script>
<style src="@vueform/slider/themes/default.css">
</style>