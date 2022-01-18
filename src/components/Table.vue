<template>
  <div class="container">
    <h1 class="text-center my-4 fw-bold">Listado de Post</h1>
    <div class="loading text-center " v-if="getLoading">Cargando...</div>
    <!-- INTENTÉ VOLVER A PONER EL GIF PERO NO ME DA... HELP!!
      <div class="loading text-center " v-if="getLoading">
      <img src="../src/assets/gif/Eclipse.gif" alt="Eclipse de carga"
      </div> -->
    <table class="table" v-else>
      <thead class="table-blue">
        <tr>
          <th>ID</th>
          <th>Titulo</th>
          <th>Contenido</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>
            <button class="btn btn-blue" @click="deletePost(post.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getPost");
  },

  computed: {
    posts() {
      return this.$store.state.posts;
    },
    getLoading() {
      return this.$store.state.loading;
    },
  },

  methods: {
    deletePost(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(() => {
          this.$swal('¡Atención!', `Se ha eliminado el post ${id}`, 'info');
          this.$store.dispatch("getPost");
          console.log(`Se ha eliminado el post ${id}`);
        });
    },
  },
}
</script>

<style scoped>
th, td{
  text-align: center;
}
.btn-blue{
  background-color: #01497C;
  color: #ffffff;
}

.table-blue{
  background-color: #61A5C2;
  color: #ffffff;
}
  
</style>