import firebase from '@/api/conection'
require('firebase/firestore')

const db = firebase.firebase.firestore()
export default {

  editUser (id, datos) {
    return db.doc(id).set(datos)
  },
  getUser () {
    return db.collection('users').get()
  },
  createUser (datos) {
    console.log(db)
    return db.collection('user').add({ nom: 'dfa' })
  },
  deleteUser (id) {
    return db.doc(id).delete()
  }

}
