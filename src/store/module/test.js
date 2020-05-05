export default {
  namespaced: true,
  state: {
    nombre: 'oscar'
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    },
    SUMA (state) {
      state.nombre++
      console.log(state.nombre)
    }

  },
  actions: {
    aslasuma (state, stri) {
      state.user = stri
    }
  }
}
