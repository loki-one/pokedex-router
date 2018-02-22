<template>
  <div class="text-center">
    <h1>Add a new Pokemon!</h1>
    <input class="form-control" v-model='newPokemon.name'>
    <button class="btn btn-success" @click='save'>Save</button>
    <button @click="cancel" class="btn btn-default">Cancel</button>
  </div>
</template>

<script>
import {pokedex} from '../pokedex.js'

export default {
  name: 'AddPokemon',
  data: function () {
    return {
      category: {},
      newPokemon: {
        name: '',
        level: 1
      }
    }
  },
  methods: {
    isTheOne: function (category) {
      return category.name === this.$route.params.name
    },
    cancel: function () {
      this.$router.push('/category/' + this.category.name)
    },
    save: function () {
      this.category.pokemons.push(this.newPokemon)
      this.$router.push('/category/' + this.category.name)
    }
  },
  mounted: function () {
    this.category = pokedex.categories.find(this.isTheOne)
  }
}
</script>
