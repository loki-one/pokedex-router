<template>
  <div>
    <h2
    :style="[currentCategory.name == 'Fire' ? fireStyle : currentCategory.name == 'Water' ? waterStyle : currentCategory.name == 'Electric' ? electricStyle : defaultStyle ]">
      <strong> {{ currentCategory.name }} Pokemons</strong>
    </h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="(pokemon, index) in currentCategory.pokemons" :key="index">
        <h3>
            {{ pokemon.name }} <br>
        </h3>
        <h4>Level: <span class="badge badge-pill">{{ pokemon.level }}</span>
        </h4>
      </li>
    </ul>
    <div class="btn-group">
      <router-link :to="{ name: 'Home' }" tag="button" class="btn btn-info" exact>Back to Categories</router-link>
      <router-link v-if="currentCategory.name" :to="{ name: 'add.pokemon', params: {name: currentCategory.name} }" tag="button" class="btn btn-success" exact>
        Add Pokemon
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {pokedex} from '../pokedex.js'

export default {
  props: ['name'],
  name: 'CategoryPage',
  data: function () {
    return {
      currentCategory: {},
      fireStyle: {
        color: '#dc143c'
      },
      waterStyle: {
        color: '#40e0d0'
      },
      electricStyle: {
        color: '#ffd700'
      },
      defaultStyle: {
        color: '#00ff7f'
      }
    }
  },
  methods: {
    isTheOne: function (category) {
      return category.name === this.name
    }
  },
  mounted: function () {
    this.currentCategory = pokedex.categories.find(this.isTheOne)
  }
}
</script>
