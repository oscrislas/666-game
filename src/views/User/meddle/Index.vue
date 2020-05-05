<template>
    <div >
        <h2>Post</h2>

        <div class="boxpost"  >
            <div class="my-3">
                <Posting/>
            </div>
            <div v-for="i of 15" :key="i">
                <Post/>
            </div>
        </div>

    </div>
</template>
<script>
import Post from '@/components/Post/Index'
import Posting from '@/components/Posting/Index'
export default {
  name: 'middle',
  components: {
    Post,
    Posting
  }
}
</script>

<style scoped>
.boxpost{
    overflow-y: scroll;
    height: 600px;
}

</style>
