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

    const commentsById = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(r => r.json())
            .then(r => selectedPost.value[postId] = {...selectedPost.value[postId], 'comments': r})
    }

    const collapseController = (postId) => {
        selectedPost.value[postId]?.collapse ? selectedPost.value[postId].collapse = false : selectedPost.value[postId] = {'collapse': true}
        if(selectedPost.value[postId]?.collapse) {
            commentsById(postId)
        }
        
    }

</script>

<template>
    <div v-for="post in posts" data-bs-toggle="collapse" :href="'#collapseExample-'+post.id" role="button" aria-expanded="false" :aria-controls="'collapseExample-'+post.id" @click="collapseController(post.id)">
        <p class="post">
            <i class="bi bi-file-minus h2" v-if="selectedPost[post.id]?.collapse"></i>
            <i class="bi bi-file-plus h2" v-else></i>
            <span :class="selectedPost[post.id]?.collapse ? 'fst-italic' : ''">{{ post.title }}</span>
        </p>
        <div class="collapse" :id="'collapseExample-'+post.id">
            <div class="card card-header">
                {{ post.body }}.
            </div>
            <div class="card card-body">
                <h5>Comments</h5>
                <figure v-for="c in selectedPost[post.id]?.comments">
                    <blockquote class="blockquote">
                        <p>{{ c.body }}</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        {{ c.name }} <cite title="Source Title">{{ c.email }}</cite>
                    </figcaption>
                </figure>

                
            </div>
        </div>
    </div>
    
</template>
<style scoped>
p.post:hover {
    /* background-color: gray;
    color: white; */
    border-bottom: 1px solid gray;
    border-radius: 5px;
    height: 40px;

}
</style>