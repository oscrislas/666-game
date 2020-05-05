import firebase from 'firebase'

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
          email: user.email
        })
      } else {
        commit('SET_USER', null)
      }
    },
    signOut () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // this.$router.replace({
          //  path: 'user'
          // })
        })
    },
    sigIn ({ commit }, form) {
      console.log('ogjeto ' + form.email, form.password)
      firebase
        .auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(data => {
          commit('SET_LOGGED_IN', true)
          commit('SET_USER', form)
        })
        .catch(err => {
          this.error = err.message
          console.log(this.error)
        })
    }
  }
}
