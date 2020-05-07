import apiAuth from '@/api/apiAuth'

export default {
  namespaced: true,
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN (state, value) {
      state.user.loggedIn = value
    },
    SET_USER (state, data) {
      state.user.data = data
    }
  },
  actions: {
    fetchUser ({ commit }, user) {
      commit('SET_LOGGED_IN', user !== null)
      if (user) {
        commit('SET_USER', {
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL
        })
      } else {
        commit('SET_USER', null)
      }
    },
    signOut () {
      return apiAuth.logout()
    },
    sigIn ({ commit }, form) {
      return apiAuth.loginUser(form)
        .then(data => {
          commit('SET_LOGGED_IN', true)
          commit('SET_USER', data)
          console.log(data)
        })
    }
  }
}
