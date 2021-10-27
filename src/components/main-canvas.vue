<template lang="pug">
  .canvas(ref="canvas")
    resize-observer(@notify="resize")

    renderer(:size="{w: 1, h: 1}", :obj="globalRenderer")
      scene
        orbit-controls(:position="{x: 3, y: 3, z: 3}")
          camera(:obj="globalCamera")
        light(:hex="0xffffff", :position="{ x: 0, y: 0, z: 1 }")
        light(:hex="0xffffff", :intensity="0.3", :position="{ x: 0, y: 0, z: -1 }")
        light(:hex="0xffffff", :intensity="0.9", :position="{ x: 0, y: 1, z: 0 }")
        light(:hex="0xffffff", :intensity="0.5", :position="{ x: 0, y: -1, z: 0 }")
        light(:hex="0xffffff", :intensity="0.75", :position="{ x: 1, y: 0, z: 0 }")
        light(:hex="0xffffff", :intensity="0.6", :position="{ x: -1, y: 0, z: 0 }")
        
        cube(
          :scale="scaleValue(this.value.cube.w, this.value.cube.h, this.value.cube.d)",
          :color="colorAsNumber(value.cube.color)",
          texture-url="https://uploads.codesandbox.io/uploads/user/61005d1d-8408-4fb3-adc6-5a8c7f69363a/EQYr-stone.png"
        )
</template>

<script>
import { Color, WebGLRenderer, PerspectiveCamera } from 'three'
import { ResizeObserver } from 'vue-resize'

import cube from './elements/cube'

export default {
  name: "mainCanvas",
  components: {
    ResizeObserver,
    cube
  },

  props: {
    value: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      globalRenderer: null,
      globalCamera: null
    }
  },

  created () {
    this.init()   
  },

  mounted () {    
    this.resize()
  },

  methods: {
    init () {
      this.globalRenderer = new WebGLRenderer({ antialias: true })
      this.globalRenderer.setClearColor(0x0c0c82)
      this.globalCamera = new PerspectiveCamera(100, 1/1, 0.1, 1000)
    },
    
    resize () {
      this.globalCamera.aspect = this.$refs.canvas.clientWidth / this.$refs.canvas.clientHeight
      this.globalCamera.updateProjectionMatrix()
      this.globalRenderer.setSize(this.$refs.canvas.clientWidth, this.$refs.canvas.clientHeight)
    },

    colorAsNumber (value) {
      const color = new Color(value.hex)
      return color.getHex()
    },

    scaleValue (w, h, d) {
      return {
        x: w, 
        y: h, 
        z: d
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.canvas {
  height: 400px;
}
</style>
