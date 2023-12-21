<template>
  <v-container class="fondo">
    
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
      <v-card class="pa-1" :to="{ name: 'post', params: { id: post._id } }">
        <v-img height="250" :src="`/${post.image}`"></v-img>
        <v-btn class="ml-4 mt-3" small outlined color="red">
          {{ post.categoria }}
        </v-btn>
        <v-card-title class="headline">
          {{ post.titulo }}
        </v-card-title>
        <v-card-text class="py-0">
          <p>{{ post.contenido.substring(0, 100) + "..." }}</p>
        </v-card-text>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.fondo{
  background-image: url('/wallpaper.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>

<script>
import API from "../api";
  export default {
    name: 'Home',
    data(){
      return {
        posts: [],
      };
    },
    async created(){
      this.posts = await API.getAllPost();
    },
  };
</script>
