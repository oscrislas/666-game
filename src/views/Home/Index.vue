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
        <register/>
      </div>
      <div class="col-12">
        <footerhome/>
      </div>
    </div>
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
