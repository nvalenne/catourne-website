<template>
    <div id="container"></div>
  </template>

<script type="module">
  import * as Three from 'three'
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  let scene = new Three.Scene();
  let model;
  export default {
    name: "Renderer3D",
    data() {
      return {
        camera: null,
        renderer: null,
        mesh: null
      }
    },
    methods: {
      init: function() {
        let container = document.getElementById('container');

        this.camera = new Three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.4, 1500 );
        this.camera.position.z = 2.5;
        this.camera.position.y = 1;

        const loader = new GLTFLoader();
        loader.load( `models/capybara/scene.gltf`, function ( gltf ) {
          model = gltf;
          scene.add( gltf.scene );
        }, undefined, function ( error ) {
          console.error( error );
        } );

        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(window.innerWidth/2, window.innerHeight/2);
        container.appendChild(this.renderer.domElement);

      },
      animate: function() {
        requestAnimationFrame(this.animate);

        model.scene.rotation.y += 0.01;

        this.renderer.render(scene, this.camera);
      }
    },
    mounted() {
      this.init();
      this.animate();
    }
  }
</script>

<style scoped>

</style>