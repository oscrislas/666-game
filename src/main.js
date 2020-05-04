import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/bootstrapVue'
import '@/assets/css/main.scss'
import '@/api/conection'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      // store.dispatch('fetchUser')
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
