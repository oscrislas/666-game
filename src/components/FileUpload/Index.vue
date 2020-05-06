<template>
  <div>

      <div class="file-field circulo" v-if="uploadValue==0">
    <label for="file">
        <h4>
                {{TextButton}}
        </h4>

        <img class="circulo" for="file" src="https://lh3.googleusercontent.com/proxy/MfF8jmt3KFfNVWAkYRH5gcXMxrz6RzN6aOhTQIXEaXfekhWD2kvkICuwsKuoGou2HZlh8V03tr3a81rbqbhlSb4XDI9fxc-bolFYa3C6vRDgOwQ0" alt="">

    </label>
      <input type="file" @change="previewImage" accept="image/*" id="file" style="display:none">
    </div>

    <div >
      <p v-if="showPorcent">Progress: {{uploadValue.toFixed()+"%"}}
      <progress v-if="showBarra" id="progress" :value="uploadValue" max="100" ></progress>  </p>
    </div>
    <div v-if="imageData!=null">
        <img class="preview" :src="picture">
        <br>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'Upload',
  props: {
    showPorcent: {
      type: Boolean,
      default: false
    },
    TextButton: {
      type: String,
      default: 'Upload'
    }
  },
  data () {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0
    }
  },
  computed: {
    showBarra () {
      if (this.uploadValue < 100) {
        return true
      }
      return false
    }
  },
  methods: {
    previewImage (event) {
      this.uploadValue = 0
      this.picture = null
      this.imageData = event.target.files[0]
      this.onUpload()
    },

    onUpload () {
      this.picture = null
      const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData)
      storageRef.on('state_changed', snapshot => {
        this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      }, error => { console.log(error.message) },
      () => {
        this.uploadValue = 100
        storageRef.snapshot.ref.getDownloadURL().then((url) => {
          this.picture = url
          console.log(this.picture)
        })
      }
      )
    }

  }
}
</script>

<style lang="scss">
.preview {
    width: 200px;
}
.circulo{
  position: relative;
  border-radius: 100%;
}
</style> >
