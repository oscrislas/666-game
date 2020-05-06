<template>
<div class="not">
    <div class="bg-red not form-group btn btn-outline-warning " v-show="shows" @click="show2 = !show2" >
            <slot name="titulo">
                <h3>Titulo del  slot notificacion</h3>
            </slot>
        <slot name="cuepo">
            <p>
                Mensaje del slot  notificacion
            </p>
        </slot>
    </div>
</div>

</template>

<script>
/* cSpell:enable */
export default {
  name: 'Notification',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      show2: true
    }
  },
  computed: {
    shows () {
      return this.show ^ this.show2
    }
  }

}
</script>

<style scoped>

</style>
