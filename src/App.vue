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
    display: flex;
    flex-flow: column wrap;
    overflow: hidden;
    width: 100%;
  }
  body {
    max-width: 100%;
    margin: 0;
  }
</style>
