<script setup>
import { ref } from 'vue'
const props = defineProps(['data'])
const tableData = ref(props.data)
console.log(props.data)

</script>

<template>
    <table class="table table-striped">
      <tbody>
        <tr v-for="data in tableData">
          <td v-for="k in Object.keys(data)">{{ data[k] }}</td>
        </tr>
      </tbody>
    </table>
</template>

<style scoped>

</style>