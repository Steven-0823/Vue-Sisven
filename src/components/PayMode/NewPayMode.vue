<template>
  <div class="container text-start">
      <h1 class="text-primary fw-bold">Agregar Nuevo Modo de Pago</h1>
      <div class="card">
          <div class="card-header fw-bold">Modo de Pago</div>
          <div class="card-body">
              <form @submit.prevent="savePayMode">
                  <div class="row mb-3">
                      <label for="id" class="form-label">Id</label>
                      <div class="input-group">
                          <div class="input-group-text">
                              <font-awesome-icon icon="tag" />
                          </div>
                          <input type="text" class="form-control" id="id" placeholder="Id del modo de pago" v-model="paymode.id" disabled>
                      </div>
                  </div>
                  <div class="row mb-3">
                      <label for="name" class="form-label">Nombre</label>
                      <div class="input-group">
                          <div class="input-group-text">
                              <font-awesome-icon icon="building" />
                          </div>
                          <input type="text" class="form-control" id="name" placeholder="Nombre del modo de pago" v-model="paymode.name" required>
                      </div>
                  </div>
                  <div class="row mb-3">
                      <label for="observation" class="form-label">Observación</label>
                      <div class="input-group">
                          <div class="input-group-text">
                              <font-awesome-icon icon="building" />
                          </div>
                          <textarea class="form-control" id="observation" placeholder="Observación del modo de pago" v-model="paymode.observation" required></textarea>
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
  name: 'NewPayMode',
  data() {
      return {
          paymode: {
              id: 0,
              name: '',
              observation: ''
          }
      };
  },
  methods: {
      cancelar() {
          this.$router.push({ name: 'paymodes' });
      },
      async savePayMode() {
          console.log('Payload:', this.paymode); // Verificar valores antes de enviar
          try {
              const res = await axios.post('http://127.0.0.1:8000/api/paymodes', {
                  name: this.paymode.name,
                  observation: this.paymode.observation
              });
              if (res.status == 200) {
                  this.$router.push({ name: 'paymodes' });
                  Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'Modo de pago creado exitosamente',
                      showConfirmButton: false,
                      timer: 2000
                  });
              }
          } catch (error) {
              console.error('Error en la solicitud:', error);
          }
      }
  },
  mounted(){
      axios.get(`http://127.0.0.1:8000/api/paymodes`)
          .then(response => {
              this.paymodes = response.data.paymodes;
          })
          .catch(error => {
              console.error('Error al obtener los datos:', error);
          });
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>
