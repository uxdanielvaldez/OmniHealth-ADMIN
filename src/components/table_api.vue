<template>
  <div>

    <div
      class="container"
      style="background-color:#fff; padding-top:10px; border-radius:5px;"
    >
      <div class="table-responsive">
        <button class="btn btn-primary" style="margin-left:10px;" @click="goCrear">Generar Usuario API</button>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre de Usuario</th>
              <th scope="col">Nombre Completo</th>
              <th scope="col">Estado</th>
              <th scope="col">Manage</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="item._id">
              <th scope="row">{{ index++ }}</th>
              <td>{{ item.username }}</td>
              <td>{{ item.nombre }} {{ item.apellido }}</td>
              <td>{{ item.estado }}</td>
              <td>
                <button
                  style="border:none; background:transparent;"
                  @click="deleteUser(item._id)"
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
import Notiflix from 'notiflix'
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.viewData()
  },
  methods: {
    goCrear() {
      router.push('/crearapi')
    },
    viewData() {
      axios
      .get('https://api.omnihealth.com.do/api/user-meeting')
      .then(res => {
        this.data = res.data
      })
    },
    deleteUser(id) {
      axios
      .delete(`https://api.omnihealth.com.do/api/user-meeting/${id}`)
      .then(res => {
        if(res.status == 200) {
          Notiflix.Notify.Success("ELIMINADO CORRECTAMENTE")
          setTimeout(() => location.reload(), 3000)
        }
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
