<template>
  <div class="row">
    <div class="col-12">
      <headerhome/>
    </div>
    <div class="col-6 my-5 p-5">
      <acunt/>
    </div>
    <div class="col-6 my-5 p-5">

    </div>
    <div class="col-12">
      <footerhome/>
    </div>

  </div>
</template>

<script>
import headerhome from './header/Index'
import footerhome from './footer/Index'
import acunt from './accounts/Index'

export default {
  name: 'headerr',
  components: {
    headerhome,
    footerhome,
    acunt
  }
}
</script>

<style>
body{
 background-color: black;
}

</style>
