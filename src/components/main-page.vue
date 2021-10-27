<template lang="pug">
  .main-page
    user-settings(v-model="settings")
    main-canvas(v-model="settings")

</template>

<script>
import mainCanvas from './main-canvas'
import userSettings from './user-settings'

export default {
  name: "mainPage",
  components: {
    mainCanvas,
    userSettings
  },
  data() {
    return {
      settings: {
        cube: {
           w: 2,
           h: 1,
           d: 1,
           color: {
             hex: "#0ff"
           }       
        }
      }
    };
  }
};
</script>
