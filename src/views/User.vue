<script setup>
import {ref, onMounted} from 'vue'
import Todo from './Todo.vue';
import Album from './Album.vue';
import Posts from './Posts.vue';
  
</script>

<template>
  <div>
    
    <div id="user-nav">
      <p>Details for User Id: {{ $route.params.id }} / <router-link to="/">Go to Home</router-link></p>
    </div>

    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#todo" type="button" role="tab" aria-controls="todo" aria-selected="true">Todo's</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#album" type="button" role="tab" aria-controls="album" aria-selected="false">Album</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#posts" type="button" role="tab" aria-controls="posts" aria-selected="false">Posts</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="todo" role="tabpanel" aria-labelledby="todo-tab">
        <Todo />
      </div>
      <div class="tab-pane fade" id="album" role="tabpanel" aria-labelledby="album-tab">
        <Album />
      </div>
      <div class="tab-pane fade" id="posts" role="tabpanel" aria-labelledby="posts-tab">
        <Posts />
      </div>
    </div>
  </div>
</template>

<style>
  div#user-nav {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  div#myTabContent {
    margin-top: 30px;
  }
</style>
