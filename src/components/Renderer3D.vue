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
  let id = null;

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
        // Node element where the scene is
        let container = document.getElementById("container");


        // This part of code clear the scene and the node element where the scene is
        // Clear scene (remove models)
        while(scene.children.length > 0){
          scene.remove(scene.children[0]);
        }
        // Clear node element (remove scene)
        if (container.childNodes.length !== 0){
          container.replaceChildren();
        }


        //Create scene
        this.camera = new Three.PerspectiveCamera( 90, window.innerWidth / window.innerHeight );
        this.camera.position.set(0, 1, 1);
        scene.add(new Three.AmbientLight(0xFFFFFF, 1.4));

        //Instance GLTF Loader
        const loader = new GLTFLoader();

        // Load GLTF Model
        let modelName = this.modele;
        loader.load( `models/${this.modele}/${this.modele}.glb`, function ( gltf ) {
          let model = gltf.scene.children[0];

          /**
           * Calcule l'échelle de réference en fonction de la taille du modèle
           * (plus le modele est gros, plus l'echelle sera basse)
           */
          let boundingBox = new Three.Box3().setFromObject(model);
          let boundingBoxSize = boundingBox.getSize(new Three.Vector3()).length();
          let scale = 1/boundingBoxSize;
          model.userData.scale = scale;
          if ( modelName === "scrumaster"){
            model.scale.set(0.8, 0.8, 0.8); // Modifie l'echelle du modèle
            model.position.set(0,0.8,0); // Positionne modèle au 0,0,0
          } else {
            model.scale.set(scale, scale, scale); // Modifie l'echelle du modèle
            model.position.set(0,0.6,0); // Positionne modèle au 0,0,0
          }

          scene.add(model);
        }, undefined, function ( error ) {
          console.error( error );
        } );


        //Rendering scene
        this.renderer = new Three.WebGLRenderer({alpha: true});
        this.renderer.setSize(window.innerWidth/1.3, window.innerHeight/1.3);
        container.appendChild(this.renderer.domElement);
        scene.rotation.y = 0
      },
      animate: function() {
        id = requestAnimationFrame(this.animate);
        scene.rotation.y += 0.03

        // Render the scene
        this.renderer.render(scene, this.camera);
      },
      start(){
        if (id != null)
          cancelAnimationFrame(id)
        this.init();
        this.animate();
      }
    },
    mounted() {
      this.start()
    },
    updated() {
      this.start()
    },
    props : {
      modele : String
    }
  }
</script>

<style scoped>

</style>