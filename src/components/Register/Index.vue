<template>
    <div class="row w-75 align-middle mx-auto text-white">
          <notification :show="false">
        <template slot="titulo">
          <h3> Error al Crear la cuenta</h3>
        </template>
        <template slot="mensaje">
          <p> este es el mensaje</p>
        </template>
      </notification>
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

                </div>
                <div class="form-group">
                <input type="email" placeholder="Email" v-model="Form.Email" class="form-control my-4">
                <input type="password" placeholder="Contraseña" v-model="Form.Password" class="form-control my-4">
                <datepiker v-on:fecha="getfecha"/>

                <div class="btn-group my-4" >
                    <label class="btn btn-secondary ">
                        <input type="radio" name="option" id="option1" value="male" checked v-model="Form.Gender">Hombre
                    </label>
                    <label class="btn btn-secondary ">
                        <input type="radio" name="option" id="option2" value="female" v-model="Form.Gender"> Mujer
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
import datepiker from '@/components/DatePiker/Index.vue'
import notification from '@/components/Notification/Index.vue'
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
        Birthday: '',
        Gender: '',
        ImageProfile: 'https://www.cognodata.com/wp-content/uploads/2019/01/perfil-de-cliente-e1549901099803-1.jpg',
        ImegeHome: '',
        Friends: Object
      }
    }
  },
  components: {
    datepiker,
    notification
  },
  methods: {
    getfecha (val) {
      console.log(val)
      this.Form.Birthday = val
    },
    submit () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.Form.Email, this.Form.Password)
        .then(data => {
          console.log(data.user)
          data.user
            .updateProfile({
              displayName: this.Form.Name + ' ' + this.Form.LastName,
              phoneNumber: this.Form.Phone,
              photoURL: this.Form.ImageProfile === '' ? 'https://www.cognodata.com/wp-content/uploads/2019/01/perfil-de-cliente-e1549901099803-1.jpg' : this.Form.ImageProfile,
              birthday: this.Birthday,
              genare: this.Birthday

            })
            .then(() => { })
          console.log('paso por aqui')
          // this.$router.push({ path: 'ConRegistro' })
        })
        .catch(err => {
          console.log(err)
          this.error = err.message
        })
    }
  }

}
</script>
