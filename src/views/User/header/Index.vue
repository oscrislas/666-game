<template>
    <div class="heder wx-100 py-3">
        <div class="form-inline">
        <img class="mx-5" :src="user.data.user.photoURL" alt="">
        <h1 class="text-white">Hi {{ user.data.user.displayName }}</h1>
        <input class="form-control r" placeholder="Buscar" type="text">
        <b-button v-on:click="Logout">Logout</b-button>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'cabesa',
  methods: {
    // ...mapGetters('oauth', ['user']),
    Logout () {
      // this.$store.commit('aslasuma')
      this.$router.replace({
        path: '/'
      })
    }
  },
  computed: {
    ...mapState('oauth', ['user'])
  }
}
</script>

<style >
img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
}
.r{
    margin-left: 55%;
}
</style>
