<template>
  <div>
    <div id="container"></div>
    <div>{{modele}}</div>
  </div>
</template>

<script type="module">
  import * as Three from 'three'
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  let scene = new Three.Scene();
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
        /**
         * Create scene
         * @type {HTMLElement}
         */
        let container = document.getElementById('container');
        this.camera = new Three.PerspectiveCamera( 120, window.innerWidth / window.innerHeight );
        this.camera.position.set(0, 2, 5.5);
        scene.add(new Three.AmbientLight(0xFFFFFF, 1));

        /**
         * Loading 3D model
         * @type {GLTFLoader}
         */
        const loader = new GLTFLoader();
        const urlModel = `models/${this.modele}/scene.gltf`;
        let model;
        loader.load( urlModel, function ( gltf ) {
          model = gltf.scene;
          model.scale.set(0.8,0.8,0.8)
          scene.add(model);
        }, undefined, function ( error ) {
          console.error( error );
        } );

        /**
         * Rendering scene
         * @type {WebGLRenderer}
         */
        this.renderer = new Three.WebGLRenderer({alpha: true});
        this.renderer.setSize(window.innerWidth/1.3, window.innerHeight/1.3);
        container.appendChild(this.renderer.domElement);

      },
      animate: function() {
        requestAnimationFrame(this.animate);

        // Rotation animation
        scene.rotation.y += 0.03;
        this.renderer.render(scene, this.camera);
      },
    },
    mounted() {
      this.init();
      this.animate();
    },
    props : {
      modele : String
    }
  }
</script>

<style scoped>

</style>