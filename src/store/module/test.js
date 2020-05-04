export default {
  state: {
    nombre: 1
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    },
    SUMA (state) {
      state.nombre++
    }

  }
}
