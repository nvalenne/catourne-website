<template>
  <div class="main-container">
    <div>
      <select class="select_models models" v-model="model_selected" v-if="!canBeGenerated">
        <optgroup label="Modèles">
          <option value="capybara">Capybara</option>
          <option value="maxwell">Maxwell dance</option>
          <option value="floppa_cube">Floppa</option>
          <option value="el_gato">El Gato</option>
          <option value="gangnam_style">Gangnam Style</option>
        </optgroup>
      </select>
      <select class="select_models musics" v-model="music_selected" v-if="!canBeGenerated">
        <optgroup label="Musiques">
          <option value="around_the_world">Around The World</option> <!-- c'est nous les daft punk -->
          <option value="ok_i_pull_up">Ok I Pull Up</option>
        </optgroup>
      </select>
    </div>
    <div v-if="!canBeGenerated">
      <button class="btn-generate" v-if="model_selected && music_selected && !canBeGenerated" @click="generate">Generate</button>
    </div>
    <div v-else>
      <button class="btn-generate" v-if="canBeGenerated" @click="stop">Back</button>
    </div>
    <Renderer3D :modele="model_selected" v-if="canBeGenerated" />
    <a href="https://marrantmaispastrop.fun/feur" target="_blank" style="text-decoration: none;color: black">
      quoi
    </a>
  </div>
</template>

<script>
import Renderer3D from "@/components/Renderer3D.vue";
  export default {
    name: 'HomeView',

    components: {
      Renderer3D
    },
    data() {
      return {
        music_selected : '',
        model_selected : '',
        music_playing : null,
        canBeGenerated : false
      }
    },
    methods : {
      playMusic(){
        this.music_playing = new Audio(`./musics/${this.music_selected}.mp3`)
        this.music_playing.play();
        this.music_playing.loop = true;
      },
      stopMusic(){
        this.music_playing.pause();
      },
      generate(){
        this.canBeGenerated=!this.canBeGenerated;
        this.playMusic()
      },
      stop(){
        this.canBeGenerated=!this.canBeGenerated;
        this.stopMusic();
      }
    }
  }
</script>

<style scoped>
  .main-container {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
  }
  .musics, .models, .btn-generate {
    margin: 10px;
    background: black;
    color: white;
    height: 35px;
    font-size: 16px;
    border: white 2px solid;
    border-radius: 8px;
  }
</style>