import Vue from 'vue'
import Router from 'vue-router'
import CategoriesAll from '@/components/CategoriesAll'
import CategoryPage from '@/components/CategoryPage'

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
      component: CategoryPage
    }
  ],
  mode: 'history',
  base: '/'
})
