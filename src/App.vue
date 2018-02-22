<template>
  <div id="app" class="container text-center">
    <img id="logo" src="./assets/pokemon-logo.png">
    <h1>{{ headline }}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      headline: 'Welcome to the Pokedex. Check the below categories for respective Pokemons!!!'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  height: 300px;
}
</style>
