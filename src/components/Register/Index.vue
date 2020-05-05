<template>
    <div class="row w-75 align-middle mx-auto text-white">
        <div class="col-12">
            <h1>Crear Cuenta</h1>
            <p class="">Ingresa tu información para crearte una Cuenta</p>
            <frame class="form-group">
                <div class="form-inline">
                    <div class="form-group ">
                        <input type="text" v-model="Form.Name" placeholder="Nombre" class="form-control">
                    </div>
                    <div class="form-group float-right">
                        <input type="text" v-model="Form.LastName" placeholder="Apellido" class="form-control">
                    </div>
                    <div class="form-group float-right">
                        <FileUpload/>
                    </div>

                </div>
                <div class="form-group">
                <input type="email" placeholder="Email" v-model="Form.Email" class="form-control my-4">
                <input type="password" placeholder="Contraseña" v-model="Form.Password" class="form-control my-4">
                <datepiker/>
                <div class="btn-group btn-group-toggle  my-4" data-toggle="buttons">
                    <label class="btn btn-secondary ">
                        <input type="radio" name="option" id="option1" autocomplete="off" checked>Hombre
                    </label>
                    <label class="btn btn-secondary ">
                        <input type="radio" name="option" id="option2" autocomplete="off"> Mujer
                    </label>
                </div>
                </div>

                <p class="">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat impedit illo maiores, aspernatur voluptas enim ratione doloremque rem eum voluptate, dolorum praesentium quisquam libero eius deserunt at voluptatem corrupti? Obcaecati!
                </p>
                <b-button v-on:click="submit">Register</b-button>
            </frame>
        </div>

    </div>
</template>

<script>
import firebase from 'firebase'
import FileUpload from '@/components/FileUpload/Index.vue'
import datepiker from '@/components/DatePiker/Index.vue'
export default {
  name: 'Register',
  data () {
    return {
      Form: {
        Name: '',
        LastName: '',
        Email: '',
        Phone: '',
        Password: '',
        Birthday: Date,
        Gender: '',
        ImageProfile: '',
        ImegeHome: '',
        Friends: Object
      }
    }
  },
  components: {
    datepiker,
    FileUpload
  },
  methods: {
    submit () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.Form.Email, this.Form.Password)
        .then(data => {
          console.log(data.user)
            .updateProfile({
              displayName: this.Form.Name + ' ' + this.Form.LastName
            })
            .then(() => {})
          console.log('gurdado')
        })
        .catch(err => {
          console.log(err)
          this.error = err.message
        })
    }
  }

}
</script>
