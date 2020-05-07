import apiBD from '@/api/apiBD'

export default {
  namespaced: true,
  state: {
    userInfo: 'null'
  },
  mutations: {
    SET_INFO (state, playload) {
      state.userInfo = playload
    }
  },
  actions: {
    CREATE_USER ({ commit }, user) {
      commit('SET_INFO', user)
      return apiBD.createUser(user)
    }
  }
}
