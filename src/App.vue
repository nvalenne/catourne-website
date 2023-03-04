<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

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
    animation-name: party_mode;
    animation-duration: 1s;
    animation-iteration-count: infinite;
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
