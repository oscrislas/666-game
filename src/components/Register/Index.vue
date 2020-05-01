<template>
    <div class="row w-75 align-middle mx-auto">
        <div class="col-12">
            <h1>Crear Cuenta</h1>
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa placeat exercitationem reiciendis! Porro, doloremque optio magni hic quae voluptatem illum similique obcaecati incidunt exercitationem ut quasi corporis dicta nemo.</p>
            <frame class="form-group">
                <div class="form-inline">
                    <div class="form-group ">
                        <input type="text" placeholder="Nombre" class="form-control">
                    </div>
                    <div class="form-group float-right">
                        <input type="text" placeholder="Apellido" class="form-control">
                    </div>

                </div>
                <div class="form-group">
                <input type="email" placeholder="Email" class="form-control my-4">
                <input type="password" placeholder="Contraseña" class="form-control my-4">
                <datepiker/>
                <div class="btn-group-toggle btn-group my-4" data-toggle="buttons">
                    <label class="btn btn-secondary active">
                        <input type="radio" checked>Hombre
                    </label>
                    <label class="btn btn-secondary ">
                        <input type="radio"> Mujer
                    </label>
                </div>
                </div>

                <p class="">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat impedit illo maiores, aspernatur voluptas enim ratione doloremque rem eum voluptate, dolorum praesentium quisquam libero eius deserunt at voluptatem corrupti? Obcaecati!
                </p>
                <b-button>Register</b-button>
            </frame>
        </div>

    </div>
</template>

<script>
import datepiker from '@/components/DatePiker/Index.vue'
export default {
  name: 'Register',
  components: {
    datepiker
  }
}
</script>
