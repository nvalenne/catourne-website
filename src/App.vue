<template>
  <div id="app">
      <NavBar/>
      <router-view/>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components: {NavBar},

  data: () => ({
    //
  }),
};
</script>

<style>
  #app {
    color: white;
    font-family: "Climate Crisis", "sans-serif";
    display: flex;
    flex-flow: column wrap;
    width: 100%;
  }
  body {
    max-width: 100%;
    margin: 0;
    overflow-x: hidden;
  }
  html {
    background: black;
  }
</style>
