import firebase from 'firebase'

export default {
  // formas de logeo usuario
  registerUser (form) {
    return firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
  },

  loginUser (form) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
  },

  changedUser () {
    return firebase.auth().onAuthStateChanged()
  },

  logout () {
    return firebase
      .auth()
      .signOut()
  }
}
