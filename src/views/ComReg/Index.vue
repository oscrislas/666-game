<template>
    <div class="form-group p-5 template row">
    <div class="col-12">
                <h2>
        Complate your Register
    </h2>
    </div>

    <div class="col-6">

    <input class="form-control my-5" type="text" placeholder="Add Phone">
    <input class="form-control my-5" type="text" placeholder="Add another thing XD">

        <b-button class="m-5">Save</b-button>
    <b-button class="m-5" to="user" >Finish</b-button>

    </div>

    <div class="col-6">
        <h3 class="m-5">
          Add some Perfil Image
        </h3>
        <div class="photo">
         <fileupload/>
        </div>

    </div>
    </div>
</template>

<script>
import fileupload from '@/components/FileUpload/Index'
export default {
  name: 'ComReg',
  components: {
    fileupload
  }
}
</script>

<style scoped>
.template{
  width: auto;
  height: 100%;
}
.photo{
  height: 300px;
}
</style>
