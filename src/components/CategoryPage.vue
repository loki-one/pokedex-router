<template>
  <div>
    <h2>{{ currentCategory.name }}</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="(pokemon, index) in currentCategory.pokemons" :key="index">
        {{ pokemon.name }}
        <span class="badge badge-pill">{{ pokemon.level }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {pokedex} from '../pokedex.js'

export default {
  name: 'CategoryPage',
  data: function () {
    return {
      currentCategory: {}
    }
  },
  methods: {
    isTheOne: function (category) {
      return category.name === this.$route.params.name
    }
  },
  mounted: function () {
    this.currentCategory = pokedex.categories.find(this.isTheOne)
  }
}
</script>
