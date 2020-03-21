<template>
  <div id="app">
    <img alt="Elefante logo" src="./assets/main.jpg">
    <Main msg="Bem-vindo ao Elefante de Olinda"/>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #A81317;
}

#app img {
  max-width: 100%;
}
</style>
