<template  >
<div class="heder">
    <div class="row pt-3 pb-3 ">
        <div class="col-6 text-white">
            <h1 class="font-weight-bolder ">
                Welcome to {{ varA }} {{varB}} {{resultado}}.com
            </h1>
        </div>
        <div class="col-6 text-white">
        <form class="form-inline" @submit.prevent="login">
            <div class="form-group">
                <input type="text" v-model="form.email" class="m-3 form-control" name="" id="" placeholder="Email or Phone">
            </div>
            <div class="form-group">
                <input type="password" v-model="form.password" class="m-3 form-control" placeholder="Password" >
            </div>
            <b-button class="mx-2" v-on:click="login()">Login</b-button>
            <b-button class="mx-2" v-on:click="otro">Other</b-button>

        </form>

        </div>

    </div>
</div>

</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex'

export default {

  name: 'cabecera',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState('cal', ['varA']),
    ...mapState('cal', ['varB']),
    ...mapGetters('cal', ['resultado'])
  },
  methods: {
    ...mapMutations('cal', ['SETA', 'SETB']),
    login () {
      // this.$store.commit('aslasuma')
      this.$store.dispatch('oauth/sigIn', this.form).then(() => {
        console.log(this.form)
        this.$router.push({ path: '/' })
      }).catch(err => {
        this.error = err.message
        console.log(this.error)
      })
    },
    otro () {
      this.$store.dispatch('user/CREATE_USER', this.form).then((docRef) => {
        console.log('exito')
      }
      )
        .catch((error) => {
          alert('Error adding document: ', error)
        })
    }

  }
}
</script>
