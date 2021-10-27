<template lang="pug">
  mesh(name="Cube")
    geometry(type="Box")
    material(type="MeshBasic", :color="color")
      texture(:url="textureUrl")
    //-animation(:fn="animate", :speed="3")

</template>

<script>
import { RepeatWrapping } from  'three'
import { Object3D } from 'vue-threejs'
export default {
  name: 'cube',
  mixins: [Object3D],
  props: { 
    scale: {
      type: Object,
      default: undefined
    },
    color: {
      type: Number,
      default: undefined
    },
    textureUrl: {
      type: String
    }
  },

  mounted () {
    this.curObj.children[0].material.map.wrapS = this.curObj.children[0].material.map.wrapT = RepeatWrapping;
    this.curObj.children[0].material.map.repeat.set(this.scale.x, this.scale.y)
  },

  watch: {
    color: {
      handler () {
        this.curObj.children[0].material.color.set(this.color)
      }
    },
    scale: {
      handler () {
        this.curObj.children[0].material.map.repeat.set(this.scale.x, this.scale.y)
      }
    }
  }
}
</script>