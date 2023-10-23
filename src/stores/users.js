import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('user', () => {
  const users = ref([])
  const err = ref('')
  
  function all() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(r => users.value=r)
      .catch(e => err.value=e)
  }

  function byUserName(username) {
    fetch(`https://jsonplaceholder.typicode.com/users?${username}`)
      .then(r => r.json())
      .then(r => users.value=r)
      .catch(e => err.value=e)
  }

  return { users, all, byUserName }
})
