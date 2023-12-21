<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            ITLaguna
          </v-list-item-title>
          <v-list-item-subtitle>
            Proyecto Pila Completa 1
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item 
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          link
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><b>Bienvenido</b></v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row>
          <v-col class="router-view-column" cols="auto">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'Inicio', icon: 'mdi-home', link: '/' },
      { title: 'Añadir post', icon: 'mdi-note-plus', link: '/add-post' },
      { title: 'Acerca De', icon: 'mdi-help-box', link: '/about' },
      { title: 'Login', icon: 'mdi-help-box', link: '/login' },
    ],
  }),
};
</script>
<style>
.router-view-column {
  width: 100%; 
}
</style>