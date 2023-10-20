<script setup>
  import {ref, onMounted} from 'vue'

  const users = ref([])

  onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .then(r => users.value=r)
    .catch(e => console.log(e))
  })
</script>

<template>
  <div>
    <table class="table table-striped">
      <tbody>
        <tr v-for="user in users">
          <td v-for="k in Object.keys(user)">{{ user[k] }}</td>
          <td>
            <button class="btn btn-info" @click="() => this.$router.push(`/user/${user.id}`)">
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