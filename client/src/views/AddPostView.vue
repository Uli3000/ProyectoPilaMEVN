<template>
    <v-container>
      <v-row no-gutters>
        <v-col sm="10" class="mx-auto">
          <v-card class="pa-5">
            <v-card-title>
              Añade un nuevo post
            </v-card-title>
            <v-divider></v-divider>
            <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
              <v-text-field label="Titulo" v-model="post.titulo" prepend-icon="mdi-note" :rules="rules"></v-text-field>
              <v-select label="Categoria" v-model="post.categoria" :items="categorias" prepend-icon="mdi-view-list" :rules="rules"></v-select>
              
              <v-textarea label="Contenido" v-model="post.contenido" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
  
              <v-file-input @change="selectFile" :rules="rules" show-size counter multiple label="Selecciona una imagen"></v-file-input>
  
              <v-btn type="submit" class="mt-3" color="primary">Subir post</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import API from '../api';
  import Swal from 'sweetalert2';
  
  export default {
    data() {
      return {
        rules: [(value) => !!value || "Este campo es obligatorio!!"],
        categorias: ["Acción",
        "Aventura",
        "RPG (Rol)",
        "Disparos (Shooter)",
        "Estrategia",
        "Deportes",
        "Carreras",
        "Simulación",
        "Puzzle",
        "Plataformas",
        "Lucha",
        "Survival Horror",
        "Mundo Abierto",
        "Multijugador",
        "Realidad Virtual",
        "Indie"], 
        post: {
          titulo: "",
          categoria: "",
          contenido: "",
          image: "",
        },
        image: "",
      };
    },
    methods: {
      selectFile(file) {
        this.image = file[0];
      },
      async submitForm() {
        const formData = new FormData();
        formData.append("image", this.image);
        formData.append("titulo", this.post.titulo);
        formData.append("categoria", this.post.categoria);
        formData.append("contenido", this.post.contenido);
        if (this.$refs.form.validate()) {
          const response = await API.addPost(formData);
          this.$router.push({ name: "home" });
          Swal.fire("", response.message, "success");
        }
      },
    },
  };
  </script>