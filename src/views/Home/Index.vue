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
      <notification :show="error">
        <template slot="titulo">
          <h3> Error al Iniciar Seccion</h3>
        </template>
        <template slot="mensaje">
          <p> este es el mensaje</p>
        </template>
      </notification>
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
import notification from '@/components/Notification/Index'

export default {
  name: 'headerr',
  components: {
    headerhome,
    footerhome,
    acunt,
    register,
    notification
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
