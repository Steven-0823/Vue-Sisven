<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Agregar Nueva Categoría</h1>
    <div class="card">
      <div class="card-header fw-bold">
        Categoría
      </div>
      <div class="card-body">
        <form @submit.prevent="saveCategoria">
          <div class="row mb-3">
            <label for="id" class="form-label">Id</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="tag" />
              </div>
              <input type="text" class="form-control" id="id" placeholder="Id categoria" v-model='categoria.id' disabled>
            </div>
          </div>
          <div class="row mb-3">
            <label for="name" class="form-label">Nombre</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input type="text" class="form-control" id="name" placeholder="Nombre de la categoría" v-model='categoria.name' required>
            </div>
          </div>
          <div class="row mb-3">
            <label for="description" class="form-label">Descripción</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <textarea class="form-control" id="description" placeholder="Descripción de la categoría" v-model='categoria.description' required></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-success">Agregar</button>
          <button type="button" class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'NewCategoria',
  data() {
    return {
      categoria: {
        id: 0, 
        name: '',
        description: ''
      }
    }
  },
  methods: {
    cancelar() {
      this.$router.push({ name: 'categorias' });
    },
    async saveCategoria() {
        const res= await axios.post(`http://127.0.0.1:8000/api/categorias`, this.categoria);
        console.log(res)
        if (res.status==200) {
          this.$router.push({name:'categorias'})
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Categoría creada exitosamente',
            showConfirmButton: false,
            timer: 2000
          })
          
        }
    }
    },mounted(){
      axios.get(`http://127.0.0.1:8000/api/categorias`)
      .then(response=>{
        this.categorias = response.data.categorias
      })
    }
    
  }
</script>

<style scoped>
/* Tus estilos aquí */
</style>
