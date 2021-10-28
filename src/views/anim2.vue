<template>
<b-container >
  <b-row style="width:100%;margin-top:200px">
    <b-col md="6">
     <p>Полный код этого проекта доступен здесь . Вы также можете посмотреть демо . Нашей целью будет преобразовать этот пример Three.js в приложение Vue и, возможно, добавить немного больше функциональности, пока мы работаем над ним.

Для начала создайте новое приложение vue с помощью инструмента Vue CLI. (Если вы этого не делали раньше, ознакомьтесь с этим замечательным учебником .) В этом учебном пособии вы можете выбрать любые удобные для вас настройки; просто убедитесь, что вы выбрали добавление Vuex в проект.</p>
    </b-col>
    <b-col md="6">
  
  <renderer :size="size">
    <scene>
      
        <camera :position="{ x: 8.9, y: 5.59, z: 21.03 }"
          :rotation="{ x: 0, y: 0, z: 0 }"></camera>
      
      <light :hex="0xefefff" :intensity="2" :position="{ x: 50, y: 50, z: 50 }"></light>
      <light :hex="0xefefff" :intensity="2" :position="{ x: -50, y: -50, z: -50 }"></light>
      <sf03 :position="{ y: 1 }" :scale="ui.sf03.scale"></sf03>
      <positional-audio loop url="static/Project_Utopia.ogg"
          :volume="0.3" :position="{ y: 10 }"></positional-audio>

      <div :key="ui.sysKey">
        <movement-system>
        </movement-system>

      </div>
    </scene>
  </renderer>
  </b-col>
  </b-row>
  <div style="height:3000px"></div>
  </b-container>
</template>

<script>
import * as THREE from 'three'
import {  WebGLRenderer } from 'three'
import * as gui from './gui'
import SF03 from './SF03'
export default {
  name: 'App',
  components: {
    sf03: SF03
  },
  data () {
    let uiSetup = gui.setupPanel
    let ui = gui.getModel()
    return {
      
      textures: [
        'cobblestone', 'diamond', 'redwool'
      ],
      ui,
      uiSetup,
      size: {
        w: 500,
        h: 300
      }
    }
  },

  methods: {
    init () {
      this.globalRenderer = new WebGLRenderer({ alpha: true})
       const scene = new THREE.Scene(); scene.background = null;
    }},
    created () {
    // hack: loop animation via vue key prop
    setInterval(() => {
      this.ui.sysKey += 1
    }, 15000)
     this.init()   
  },
 
}
</script>

<style>
</style>