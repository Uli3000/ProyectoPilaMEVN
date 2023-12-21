<template>
    <v-container>
      <v-row no-gutters>
        <v-col sm="8" class="pa-4">
          <v-card class="pa-2">
            <v-img :src="`/${post.image}`"></v-img>
            <v-card-actions class="pb-0">
              <v-row class="mt-1 mx-1">
                <v-col sm="2">
                  <v-btn small outlined color="purple">
                    {{ post.categoria }}
                  </v-btn>
                </v-col>
                <v-col sm="10" class="d-flex justify-end">
                  <v-btn color="success" text :to="{ name: 'edit-post' ,params: { id: post._id }}">Editar</v-btn>
                  <v-btn color="red" text @click="removePost(post._id)">Eliminar</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
            <v-card-subtitle class="headline">
              <h3>{{ post.titulo }}</h3>
            </v-card-subtitle>
            <v-card-text class="gray--text">
              <p>{{ post.contenido }}</p>
              <p>{{ post.created }}</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col sm="4" class="pa-4">
          <v-card class="pa-2">
            <h3>Agregar Comentario</h3>
            <form @submit.prevent="addComment">
              <div class="form-group">
                <label for="author">Nombre:</label>
                <input type="text" id="author" v-model="newComment.author" required :style="{ width: '100%', padding: '5px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }">
              </div>
              <div class="form-group">
                <label for="content">Comentario:</label>
                <textarea  id="content" v-model="newComment.content" required :style="{ width: '100%', padding: '5px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' , resize: 'none'}"></textarea>
              </div>
              <div class="form-group">
                <label  for="rating">Puntuación:</label>
                <star-rating v-model="newComment.rating" :star-size="20"></star-rating>
              </div>
              <button type="submit" :style="{ padding: '10px 20px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }">Agregar Comentario</button>
            </form>
          </v-card>
          <v-card class="pa-2">
            <h3>Comentarios</h3>
            <div v-if="comments.length === 0">No hay comentarios.</div>
            <ul v-else>
                <li v-for="comment in comments" :key="comment.id">
                <strong>{{ comment.author }}</strong> en <strong>{{ comment.postTitle }}</strong>: {{ comment.content }} - Rating: {{ comment.rating }}
                </li>
            </ul>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <style>
  .form-group {
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
  margin-bottom: 10px;
}
</style>
<script>
import API from '../api';
import Swal from 'sweetalert2';
import StarRating from 'vue-star-rating';

export default {
  components: {
    StarRating,
  },
  data() {
    return {
      post: {},
      comments: [],
      newComment: {
        author: '',
        content: '',
        rating: 0,
      },
    };
  },
  async created() {
    const response = await API.getPostByID(this.$route.params.id);
    this.post = response;

    
    const storedComments = localStorage.getItem('postComments');
    if (storedComments) {
      this.comments = JSON.parse(storedComments);
    }
  },
  methods: {
    async removePost(id) {
      const response = await API.delatePost(id);
      this.$router.push({ name: 'home' });
      Swal.fire('', response.message, 'success');
    },
    addComment() {
        this.comments.push({
            id: this.comments.length + 1,
            author: this.newComment.author,
            content: this.newComment.content,
            rating: this.newComment.rating,
            postTitle: this.post.titulo, // Agregar el título del post al comentario
        });

        // Limpiar el formulario después de agregar el comentario
        this.newComment.author = '';
        this.newComment.content = '';
        this.newComment.rating = 0;

        // Guardar los comentarios en el navegador
        localStorage.setItem('postComments', JSON.stringify(this.comments));
        },
        resetComments() {
        localStorage.removeItem('postComments');
        this.comments = []; // Reinicia la lista de comentarios en el componente
    },
  },
};
</script>