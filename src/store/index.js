import Vue from 'vue'
import Vuex from 'vuex'

import oauth from './module/oauth'
import test from './module/test'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    oauth,
    test
  }
})
