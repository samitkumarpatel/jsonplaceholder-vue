<script setup>
import {ref, onMounted, watch} from 'vue'
import { useRoute } from 'vue-router'

    const posts = ref([])
    const selectedPost = ref({});
    const route = useRoute()
    const userId = route.params.id

    onMounted(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(r => r.json())
        .then(r => posts.value = r)
        .catch(e => console.log(e))
    })

    const commentsById = async (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(r => r.json())
            .then(r => selectedPost[postId].comments = r)
    }

</script>

<template>
    <div v-for="post in posts" data-bs-toggle="collapse" :href="'#collapseExample-'+post.id" role="button" aria-expanded="false" :aria-controls="'collapseExample-'+post.id" @click="() => selectedPost[post.id]?.collapse ? selectedPost[post.id].collapse = false : selectedPost[post.id] = { collapse: true }">
        <p>
            <i class="bi bi-file-minus h2" v-if="selectedPost[post.id]?.collapse"></i>
            <i class="bi bi-file-plus h2" v-else></i>
             {{ post.title }}
        </p>
        <div class="collapse" :id="'collapseExample-'+post.id">
            <div class="card card-header">
                {{ post.body }}.
            </div>
            <div class="card card-body">
                <p v-if="selectedPost[post.id]?.collapse">comments... </p>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
p:hover {
    /* background-color: gray;
    color: white; */
    border-bottom: 1px solid gray;
    border-radius: 5px;
    height: 40px;

}
</style>