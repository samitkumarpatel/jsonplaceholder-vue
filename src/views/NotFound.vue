<script setup>
import { userStore } from '../stores/user.store'
const us = userStore()
</script>
<template>
    <h3>404 - Page NotFound</h3>
    <hr/>
    <p>Experiment on vue pinia</p>
    <button @click="us.all()">api call {{ us.userCount }}</button>
    {{ us.users.map(u => `${u.id}-${u.username}`) }}
</template>