<template>
    <div class="container">
      <h1>Listado de categorias</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(categoria, index) in categorias" :key="index">
            <th scope="row">{{ categoria.id }}</th>
            <td>{{ categoria.name }}</td>
            <td>{{ categoria.description }}</td>
            <td>actions
              <!-- Uncomment and update the following lines if you have corresponding routes and methods -->
              <!-- <a :href="`/categorias/edit/${categoria.id}`" class="btn btn-info">Edit</a>
              <form :action="`/categorias/destroy/${categoria.id}`" method="POST" style="display: inline-block">
                <input class="btn btn-danger" type="submit" value="Delete">
              </form> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'Categoria',
    data() {
      return {
        categorias: []
      }
    },
    mounted() {
      axios
        .get('http://127.0.0.1:8000/api/categorias')
        .then(response => {
          this.categorias = response.data.categorias;
        })
    }
  }
  </script>
  
  <style scoped>
  /* Tus estilos aquí */
  </style>
  