<template>
    <div>
        <frame class="form-group">
            <div class="form-inline">
                <div class="form-group">
                    <select name="" id="" v-model="dia" class="form-control" >
                        <option v-for=" m of 31" :key="m">{{m}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <select name="" id="" value="Enero" v-model="mes" class="form-control" >
                        <option v-for=" m of month" :key="m">{{m}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <select name="" id="" value="Enero" v-model="ano" class="form-control" >
                        <option  value="1992" v-for=" m  in (120)" :key="m">{{m+1900}}</option>
                    </select>
                </div>
            </div>
        </frame>
    </div>
</template>

<script>
import date from '@/utils/months'
export default {
  name: 'datePiker',
  data () {
    return {
      month: date.months,
      dia: '',
      mes: '',
      ano: ''
    }
  },
  watch: {
    dia () {
      this.$emit('fecha', this.dia + '/' + this.mes + '/' + this.ano)
    },
    mes () {
      this.$emit('fecha', this.dia + '/' + this.mes + '/' + this.ano)
    },
    ano () {
      this.$emit('fecha', this.dia + '/' + this.mes + '/' + this.ano)
    }
  }
}
</script>
