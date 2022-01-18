<template>
  <div>
    <div class="container">
      <h1 class="text-center mb-4 fw-bold">Crear post</h1>
      <input type="text" class="form-control" placeholder="Título" v-model="title" />
      <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Contenido" v-model="content"></textarea>
    <button type="button" class="btn blue_btn mt-3" @click="createPost">Enviar</button>
    </div> 
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    createPost() {
      if( this.title.length > 0 && this.content.length > 0 ){
        axios
          .post("https://jsonplaceholder.typicode.com/posts", {
            title: this.title,
            body: this.content,
          })
          .then(() => {
            this.$swal('¡Felicidades!', 'Se ha creado un nuevo post', 'success');
            this.$store.dispatch("getPost");
            console.log(`Se ha creado un nuevo post titulado ${this.title}`);
            this.title = "";
            this.content = "";
          });
          
      }else{
        this.$swal('¡Atención!', 'Todos los campos son obligatorios', 'warning');
      }
    },
  },
};
</script>
<style scoped>
.container {
  background-color: #BDE0FE;
  margin-top:3rem;
  display: flex;
  flex-direction: column;
  width: 500px;
  box-shadow: 0px 10px 10px -6px #2C7DA0;
}

input {
  margin-bottom: 1rem;
  padding: 0.25rem;
}
.blue_btn {
  background-color: #61A5C2;
  color: #ffffff;
}



</style>