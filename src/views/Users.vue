<script setup>
  import {ref, onMounted} from 'vue'
  import { userStore } from '../stores/users'

  const users = ref([])
  const err = ref('')

  onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .then(r => users.value=r)
    .catch(e => err.value=e)

  })
</script>

<template>
  <div>
    {{ err }}

    <table class="table table-striped">
      <tbody>
        <tr v-for="user in users">
          <!-- <td v-for="k in Object.keys(user)">{{ user[k] }}</td> -->
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.website }}</td>
          <td>
            <button class="btn btn-info" @click="() => $router.push(`/user/${user.id}`)">
              <i class="bi bi-arrow-right-short"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
</style>