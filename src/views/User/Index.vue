<template>
    <div class="row">
        <div class="col-12">
            <cabesa/>
        </div>
        <div class="col-3 " >
            <left/>
        </div>
        <div class="col-5">
            <middle/>
        </div>
        <div class="col-3">
            <rigth/>
        </div>

    </div>

</template>

<script>
import cabesa from './header/Index'
import left from './left/Index'
import rigth from './rigth/Index'
import middle from './meddle/Index'
export default {
  name: 'user',
  components: {
    cabesa,
    left,
    rigth,
    middle
  }
}
</script>
