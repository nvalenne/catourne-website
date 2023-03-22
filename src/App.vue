<template>
  <div id="app">
    <!--<NavBar/>-->
    <router-view/>
  </div>
</template>

<script>

//import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  //components: {NavBar},

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  margin : 0;
  padding : 0;
  text-decoration: none;
}
  #app {
    color: white;
    font-family: "Press Start 2P", "sans-serif";
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
    background: #161617;
  }
  /*
  @keyframes party_mode {
    0%   {background: red;}
    25%  {background: yellow;}
    50%  {background: blue;}
    100% {background: green;}
  }
   */


</style>
