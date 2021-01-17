<template>
  <div>
    <div
      class="container"
      style="background-color:#fff; padding-top:10px; border-radius:5px;"
    >
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>

              <th scope="col">Fecha de Registro</th>
              <th scope="col">Nombre de Usuario</th>
              <th scope="col">Nombre Completo</th>
              <th scope="col">Identificación</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="item._id">
              <th scope="row">{{ index++ }}</th>

              <td>{{ item.fechaDeRegistro }}</td>
              <td>{{ item.username }}</td>
              <td>{{ item.nombre }} {{ item.apellido }}</td>
              <td>{{ item.cedula }}</td>
              <td>
                <button
                  style="border:none; background:transparent;"
                  @click="goEdit(item._id)"
                >
                  <i class="fas fa-pen"></i>
                </button>
                <button
                  style="border:none; background:transparent;"
                  @click="goDelete(item._id)"
                >
                  <i class="fas fa-user-times"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router/index";
import axios from 'axios'
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.viewUser()
  },
  methods: {
    viewUser() {
      axios
      .get('https://api.omnihealth.com.do/api/users')
      .then(res => {
        this.data = res.data
      })
    },
    goEdit(id) {
      router.push(`/configuser/${id}`)
    },
    goDelete(id) {
      axios
      .delete(`https://api.omnihealth.com.do/api/user/${id}`)
      .then(res => {
        console.log(res)
        setTimeout(() => location.reload(), 3000)
      })
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

table {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 15px;
  text-align: center;
}
</style>
