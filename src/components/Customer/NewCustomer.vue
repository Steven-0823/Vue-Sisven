<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold">Agregar Nuevo Cliente</h1>
      <div class="card">
        <div class="card-header fw-bold">
          Cliente
        </div>
        <div class="card-body">
          <form @submit.prevent="createCustomer">
            <div class="row mb-3">
              <label for="document_number" class="form-label">Número de Documento</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="id-card" />
                </div>
                <input type="text" class="form-control" id="document_number" placeholder="Número de Documento" v-model="customer.document_number" required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="first_name" class="form-label">Nombre</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="user" />
                </div>
                <input type="text" class="form-control" id="first_name" placeholder="Nombre" v-model="customer.first_name" required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="last_name" class="form-label">Apellido</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="user" />
                </div>
                <input type="text" class="form-control" id="last_name" placeholder="Apellido" v-model="customer.last_name" required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="address" class="form-label">Dirección</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="home" />
                </div>
                <input type="text" class="form-control" id="address" placeholder="Dirección" v-model="customer.address" required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="birthday" class="form-label">Fecha de Nacimiento</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="calendar-alt" />
                </div>
                <input type="date" class="form-control" id="birthday" v-model="customer.birthday" required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="phone_number" class="form-label">Teléfono</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="phone" />
                </div>
                <input type="text" class="form-control" id="phone_number" placeholder="Teléfono" v-model="customer.phone_number" required>
              </div>
            </div>
            <div class="row mb-3">
              <label for="email" class="form-label">Email</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="envelope" />
                </div>
                <input type="email" class="form-control" id="email" placeholder="Email" v-model="customer.email" required>
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
  name: 'NewCustomer',
  data() {
    return {
      customer: {
        document_number: '',
        first_name: '',
        last_name: '',
        address: '',
        birthday: '',
        phone_number: '',
        email: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    cancelar() {
      this.$router.push({ name: 'customers' });
    },
    async createCustomer() {
      try {
        const res = await axios.post('http://127.0.0.1:8000/api/customers', this.customer);
        if (res.status === 201) {
          this.$router.push({ name: 'customers' });
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cliente creado exitosamente',
            showConfirmButton: false,
            timer: 2000
          });
        }
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.errorMessage = 'El número de documento ya existe.';
        } else {
          this.errorMessage = 'Ocurrió un error al crear el cliente.';
        }
      }
    }
  }
}
</script>

<style scoped>
/* Tus estilos aquí */
</style>
  