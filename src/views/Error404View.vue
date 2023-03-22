<template>
<div id="content">
  <div>
    <div class="error">Error 404</div>
    <div class="errorDescr">y'a rien à voir ici mon gâté</div>
  </div>
  <div class="contentAward">
    <span>mais vu que tu es un/une immense bg, je te souhaite un joyeux capybara-nniversaire</span>
    <img class="imgAward" src="img/capybara_anniversaire.jpg">
  </div>
</div>
</template>

<script>
export default {
  name: "Error404View"
}
</script>

<style scoped>

#content, .contentAward {
  margin : 20px;
  font-size: 16px;
  display: flex;
  flex-flow: wrap column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'Prompt', sans-serif;
}

.contentAward, .imgAward {
  padding-top: 50px;
}

.error {
  font-size: 64px;
  animation-name: error;
  animation-iteration-count: infinite;
  animation-duration: .8s;
}
.imgAward {
  position: relative;
  width: 300px;
}

@keyframes error {
  50% {
    color: red;
  }
  100 % {
    color : white;
  }

}

@media screen and (min-width : 720px) {
  #content, .contentAward {
    font-size : 24px;
  }
  .contentAward {
    width: 80%;
  }
  .imgAward {
    width: 500px;
  }
}
</style>