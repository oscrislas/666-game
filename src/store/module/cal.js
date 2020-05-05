export default {
  namespaced: true,
  state: {
    varA: 4,
    varB: 9
  },
  mutations: {
    SETA (state, payload) {
      state.varA = payload
    },
    SETB (state, payload) {
      state.varB = payload
    }
  },
  actions: {

  },
  getters: {
    resultado (state) {
      return state.varA + state.varB
    }
  }

}
