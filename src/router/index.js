import Vue from 'vue'
import Router from 'vue-router'
import CategoriesAll from '@/components/CategoriesAll'
import CategoryPage from '@/components/CategoryPage'
import AddPokemon from '@/components/AddPokemon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: CategoriesAll
    },
    {
      path: '/category/:name',
      name: 'category.name',
      props: function (route) {
        return {
          name: route.params.name
        }
      },
      component: CategoryPage,
      children: [{
        path: 'pokemons/new',
        name: 'add.pokemon',
        component: AddPokemon
      }]
    }
  ],
  mode: 'history',
  base: '/'
})
