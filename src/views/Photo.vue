<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const albumId = route.params.id
    const photos = ref([])
    onMounted(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(r => r.json())
            .then(r => photos.value=r)
            .catch(e => console.log(e))
    })

</script>
<template>
    <h3>Photo {{ albumId }}</h3>
    <p @click="() => this.$router.back()">Back</p>
    <img v-for="photo in photos" :src="photo.thumbnailUrl" class="img-thumbnail" :alt="photo.title">
</template>
<style scoped>
    p {
      color: blue;
      cursor: pointer;
    }
</style>