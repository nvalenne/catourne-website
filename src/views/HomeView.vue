<template>
  <div class="main-container">
    <div>
      <select class="select_models models">
        <optgroup label="Modèles">
          <option value="capybara">Capybara</option>
          <option value="maxwell">Maxwell dance</option>
          <option value="floppa_cube">Floppa</option>
        </optgroup>
      </select>
      <select class="select_models musics">
        <optgroup label="Musiques">
          <!-- c'est nous les daft punk -->
          <option value="around the world">around the world</option>
        </optgroup>
      </select>
    </div>
    <Renderer3D/>
    <div class="container">
      feur
    </div>
  </div>
</template>

<script>
import Renderer3D from "@/components/Renderer3D.vue";
  export default {
    name: 'HomeView',

    components: {
      Renderer3D
    },
  }
</script>

<style scoped>
  .main-container {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
  }
  .musics, .models {
    margin: 10px;
    background: black;
    color: white;
    height: 35px;
    font-size: 16px;
    border: white 2px solid;
    border-radius: 8px;
  }
</style>