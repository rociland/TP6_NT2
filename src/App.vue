<template>
  <div id="app" class="container-fluid mt-3"> {{ /* para que el contenido ocupe el ancho del navegador */ }}
    <div class="jumbotron"> {{ /* Para tener el fondo gris */ }}
      <h1>TP4</h1>
      <br>
      <Navbar />
      <router-view></router-view> {{ /* Importo el router view para tener las vistas */ }}
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
    
  }
}
</script>

<style>
#app {
 
}
h1{
  color: rgb(137, 44, 243);
}
</style>
