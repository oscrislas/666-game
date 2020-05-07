import db from '@/api/apiBD'

const ref = db

export default {

  editUser (id, datos) {
    return ref.doc(id).set(datos)
  },
  getUser () {
    return ref.doc(this.$route.params.id).get()
  },
  createUser (datos) {
    return this.ref.add(datos)
  },
  deleteUser (id) {
    return ref.doc(id).delete()
  }

}
