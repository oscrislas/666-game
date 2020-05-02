<template  >
    <div class="row pt-3 pb-3 bg-dark">
        <div class="col-6 container bg-dark text-white">
            <h1 class="font-weight-bolder">
                Welcome to buddy.com
            </h1>
        </div>
        <div class="col-6 text-white">
        <form class="form-inline" @submit.prevent="login">
            <div class="form-group">
                <input type="text" v-model ="form.email" class="m-3 form-control" name="" id="" placeholder="Email or Phone">
            </div>
            <div class="form-group">
                <input type="password" v-model="form.password" class="m-3 form-control" placeholder="Password" >
            </div>
            <b-button class="mx-2" v-on:click="login">Login</b-button>
            <b-button class="mx-2">Other</b-button>

        </form>

        </div>

    </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'head',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          console.log('logeado exitoso')
          this.$router.replace({ name: 'Dashboard' })
        })
        .catch(err => {
          this.error = err.message
          console.log('error al logear' + this.error)
        })
    },
    signOut () {
      firebase.auth().signOut().then(() => {
        this.$router.replace({
          name: 'home'
        })
      })
    }
  }

}
</script>
