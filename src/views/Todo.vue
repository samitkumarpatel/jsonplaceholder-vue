<script setup>
    import {ref, onMounted, watch} from 'vue'
    import { useRoute } from 'vue-router'

    const todos = ref([])
    const route = useRoute()
    const userId = route.params.id

    onMounted(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(r => r.json())
        .then(r => todos.value = r)
        .catch(e => console.log(e))
    })

</script>
<template>

    <div class="form-check" v-for="todo in todos">
        <input class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" :checked="todo.completed">
        <label class="form-check-label" for="flexRadioDefault1" :class="todo.completed ? 'text-decoration-line-through' : ''">
            {{ todo.title }}
        </label>
    </div>

</template>
<style scoped>
    div.form-check {
        margin-top: 10px;;
    }
</style>