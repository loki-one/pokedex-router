<template>
  <div>
    <h3>Different Categories of Pokemon:</h3>
    <ul class="list-group">
      <div class="row">
        <li class="list-group-item" v-for="(category, index) in categories" :key="index">
          <router-link :to="{ name: 'category.name', params: {name: category.name} }" exact>{{ category.name }}</router-link>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import {pokedex} from '../pokedex.js'

export default {
  name: 'CategoriesAll',
  data () {
    return {
      categories: pokedex.categories
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
