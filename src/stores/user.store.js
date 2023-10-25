// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const userStore = defineStore('user', () => {
//   const users = ref([])
//   const err = ref('')
  
//   function all() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(r => r.json())
//       .then(r => users.value=r)
//       .catch(e => err.value=e)
//   }

//   return { users, all }
// })


import { defineStore } from 'pinia'
export const userStore = defineStore('userStore', {
    state: () => ({
      users: [],
    }),
    actions: {
      all() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(r => r.json())
          .then(r => this.users = r)
      }
    },
    getters: {
        userCount: (state) => state.users.length,
    }
  })