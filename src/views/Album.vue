<script setup>
    import {ref, onMounted, watch} from 'vue'
    import { useRoute } from 'vue-router'

    const albums = ref([])
    const route = useRoute()
    const userId = route.params.id

    onMounted(()=>{
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then(r => r.json())
        .then(r => albums.value = r)
        .catch(e => console.log(e))
    })
</script>
<template>
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="album in albums" >
            <div class="card" style="width: 18rem;">
                <!-- <img src="" class="card-img-top" alt="..."> -->
                <div class="card-body">
                    <h5 class="card-title">{{ album.id }}</h5>
                    <p class="card-text">{{ album.title }}</p>
                    <a href="#" class="btn btn-primary" @click="() => $router.push(`/album/${album.id}/photo`)">Photos</a>
                </div>
            </div>
        </div>
    </div>
    
</template>
<style scoped>

</style>