<template>
  <main class="text-light fondo2">
    <div class="container">
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <div class="blue-container">
              <img src="/discord.png">
              <h1 class="fw-light">Discord Login</h1>
              <p class="lead text-muted">
                Conecta tu cuenta con nosotros para poder recibir más actualizaciones en el futuro.
              </p>
              <div>
                <v-btn color="purple" text @click="loginWithDiscord">Inicia sesión con Discord</v-btn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>


.blue-container {
  background-color: rgba(0, 0, 255, .3);
  border-radius: 10px;
  padding: 20px;
}

/* Resto de los estilos... */
</style>

<script>
import axios from 'axios';

export default {
  methods: {
    loginWithDiscord() {
      axios.get('/auth')
        .then(response => {
          const redirectUrl = response.data.redirectUrl;
          window.location.href = redirectUrl;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>