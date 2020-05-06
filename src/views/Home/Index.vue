<template>
  <div class="row">
    <div class="col-12">
      <headerhome/>
    </div>

    <div class="cuerpo row">
      <div class="col-6 my-3 ">
        <acunt/>
      </div>
      <div class="col-6 my-3 ">
          <div class="m-auto">
    </div>
        <register/>
      </div>
      <div class="col-12">
        <footerhome/>
      </div>
    </div>
      <button @click="activa">activa button</button>
  </div>

</template>

<script>
import headerhome from './header/Index'
import footerhome from './footer/Index'
import acunt from './accounts/Index'
import register from '@/components/Register/Index'

export default {
  name: 'headerr',
  components: {
    headerhome,
    footerhome,
    acunt,
    register
  },
  data () {
    return {
      error: false
    }
  },
  methods: {
    activa () {
      this.error = !this.error
      console.log(this.error)
    }
  }
}
</script>

<style>
body{
 background-color: black;
}
.cuerpo{

}
</style>
