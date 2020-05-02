<template>
    <div >
        <h2>Post</h2>
        <div class="boxpost"  >
            <div v-for="i of 15" :key="i">
                <Post/>
            </div>
        </div>

    </div>
</template>
<script>
import Post from '@/components/Post/Index'
export default {
  name: 'middle',
  components: {
    Post
  }
}
</script>

<style scoped>
.boxpost{
    overflow-y: scroll;
    height: 600px;
}
::-webkit-scrollbar {
    display: none;  /* Ocultar scroll */
}
</style>
