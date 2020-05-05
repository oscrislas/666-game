<template>
    <div class="row">
        <div class="col-12 head">
            <cabecera/>
        </div>
        <div>
          <centro/>
        </div>
        <div>
            <pie/>
        </div>
    </div>
</template>

<script>
import cabecera from './Cabecera/Index'
import pie from './Pie/Index'
import centro from './Centro/Index'

export default {
  name: 'perfil',
  components: {
    cabecera,
    pie,
    centro
  }
}
</script>
<style lang="sass">

</style>
