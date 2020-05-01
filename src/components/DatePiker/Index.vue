<template>
    <div>
        <frame class="form-group">
            <div class="form-inline">
                <div class="form-group">
                    <select name="" id="" value="" class="form-control" >
                        <option v-for=" m of 31" :key="m">{{m}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <select name="" id="" value="Enero" class="form-control" >
                        <option v-for=" m of month" :key="m">{{m}}</option>
                    </select>
                </div>
                <div class="form-group">
                    <select name="" id="" value="Enero" class="form-control" >
                        <option  value="1992" v-for=" m  in (1992 , 2020)" :key="m">{{m}}</option>
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
      month: date.months
    }
  },
  methods: {
    imprime () {
      console.log(this.month[0])
    }
  },
  mounted () {
    this.imprime()
  }
}
</script>
