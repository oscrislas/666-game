<template>
    <div class="row">

        <div class="col-12 head">
            <cabecera/>
        </div>
        <div class="col-4">
            <izquierda/>
        </div>
        <div class="col-4">
          <centro/>
        </div>

        <div class="col-4">
            <derecha/>
        </div>
        <div class="col-12">
            <pie/>
        </div>
    </div>
</template>

<script>
import cabecera from './Cabecera/Index'
import pie from './Pie/Index'
import centro from './Centro/Index'
import derecha from './Derecho/Index'
import izquierda from './Izquierda/Index'

export default {
  name: 'perfil',
  components: {
    cabecera,
    pie,
    centro,
    izquierda,
    derecha
  }
}
</script>
<style lang="sass">

</style>
