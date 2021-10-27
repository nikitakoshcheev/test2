<template>
<div>
<canvas id="can1"></canvas>
     <b-button to="/">/</b-button>
     </div>
</template>
<script>

import * as THREE from 'three'

export default {
  mounted(){
    let d = 0;
    var scrollPos = 0;
const loader = new THREE.TextureLoader();
    const can1 = document.querySelector('#can1');
    const renderer = new THREE.WebGLRenderer({can1});
    console.log(renderer)

    renderer.setSize( 1200,1200 );
    document.body.appendChild( renderer.domElement);
    console.log(renderer.domElement)
const texture = loader.load('../anim/05.fbx');
    var camera = new THREE.PerspectiveCamera( 75, 2, 0.1, 100 );
    var scene = new THREE.Scene();

    var geometry = new THREE.BoxGeometry( 10, 10, 10);
    var material1 = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    var material2 = new THREE.MeshPhongMaterial( { color: 0xffff10 } );
    var cube1 = new THREE.Mesh( geometry, material1 );
    var cube2 = new THREE.Mesh( geometry, material2 );
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 1, 5);
    scene.add(light);
    scene.add( cube1 );
    scene.add( cube2 );
     scene.add( texture );
    cube2.position.x = 15;
    cube1.position.x = -15;

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }
    function render() {
    if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }
            requestAnimationFrame( render );
            window.document.onscroll = () => {
                  if (window.scrollY > 0 & window.scrollY <  3600 ) {
            var st = window.scrollY;
            if (st > scrollPos) {
              d = 1;
            } else {
              d = -1;
            }
            if (d > 0) {
              cube1.rotation.x += 0.05;
              cube2.rotation.x += 0.05;
              cube1.rotation.y -= 0.05; 
            cube2.rotation.y -= 0.05; 
            } else {
              cube1.rotation.x -= 0.05;
              cube2.rotation.x -= 0.05;
            cube1.rotation.y += 0.05; 
            cube2.rotation.y += 0.05; 
            }
            scrollPos = st;
          }    
      renderer.render( scene, camera );
      }
    }
render();
camera.position.z = 25;
  }
}
</script>