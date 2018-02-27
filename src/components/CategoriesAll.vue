<template>
  <div>
    <h2 :style="{'color': '#ff6347', 'fontWeight': 600}">Pokemon Categories!!!</h2>
    <ul class="list-group">
      <div class="row">
        <li class="list-group-item" v-for="(category, index) in categories" :key="index">
          <router-link
          :to="{ name: 'category.name', params: {name: category.name} }"
          exact
          :style="[category.name == 'Fire' ? fireStyle : category.name == 'Water' ? waterStyle : category.name == 'Electric' ? electricStyle : defaultStyle ]">
            <h2><strong>{{ category.name }}</strong></h2>
          </router-link>
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
      categories: pokedex.categories,
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
