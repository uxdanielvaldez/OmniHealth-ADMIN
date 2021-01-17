<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { Bar } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  import axios from 'axios'
  var activos = localStorage.getItem("activos")
  var inactivos = localStorage.getItem("inactivos")
  export default {
    extends:Bar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Activos', 'Inactivos'],
          datasets: [
            {
              label: 'Usuarios',
              backgroundColor: ['#2f7dad','#2f7da', '#2f7dad'],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#2f7dad',
              data: [activos, inactivos]
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
      this.viewActivos()
      this.viewInactivos()
    },
    methods: {
      viewActivos() {
        axios
        .get(`https://api.omnihealth.com.do/api/users?estado=ACTIVO`)
        .then(res => {
          var userActivos = res.data.length
          console.log(userActivos)
          localStorage.setItem("activos", userActivos)
        })
      },
      viewInactivos() {
        axios
        .get(`https://api.omnihealth.com.do/api/users?estado=INACTIVO`)
        .then(res => {
          var userInactivos = res.data.length
          console.log(userInactivos)
          localStorage.setItem("inactivos", userInactivos)
        })
      }

    }
  }
</script>