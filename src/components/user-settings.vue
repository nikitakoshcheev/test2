<template lang="pug">
  .settings
    .text-input
      label(for="cube.v") width
      vue-slider(
        name="cube.w",
        :min="1", 
        :max="10",
        v-model="value.cube.w"
      )
    .text-input
      label(for="cube.h") height
      vue-slider(
        name="cube.h",
        :min="1",
        :max="10",
        v-model="value.cube.h"
      )
    .text-input
      label(for="cube.d") depth
      vue-slider(
        name="cube.d", 
        :min="1",
        :max="10",
        v-model="value.cube.d"
      )
    .text-input
      label(for="cube.color") color
      slider-picker(name="cube.color", v-model="value.cube.color")

</template>

<script>
import vueSlider from 'vue-slider-component'
import { Slider } from 'vue-color'

export default {
  name: "userSettings",

  components: {
    vueSlider,
    'slider-picker': Slider
  },

  props: {
    value: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.settings {
  background: cadetblue;
  text-align: right;
  padding: 5px;
  user-select: none;

  .vc-slider {
    width: 100%;
  }
}
</style>
