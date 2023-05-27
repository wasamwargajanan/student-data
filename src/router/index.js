import Vue from 'vue'
import Router from 'vue-router'
import headerComp from './headerComp'

Vue.use(Router)

export const routes = [
    
    ...headerComp,
  ]

  const router = new Router({
    mode: 'history',    
    routes
  })

  export default router