<script>
import axios from 'axios'
  //Importing Bar class from the vue-chartjs wrapper
  import { Bar } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  var dataUser = localStorage.getItem('numberUser')
  export default {
    extends: Bar,
    data () {
      return {
        nregistrados: '',
        numero: '',
        chartData: '',
        datacollection: {
          //Data to be represented on x-axis
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
          datasets: [
            {
              label: 'Registrados',
              backgroundColor: ["#41B883", "#E46651", "#41B883", "#E46651", "#41B883", "#E46651", "#41B883", "#E46651", "#41B883", "#E46651", "#41B883", "#E46651",],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#2f7dad',
              data: [dataUser]
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
      this.renderChart(this.datacollection, this.options)
      this.viewUser()
  
    },
    methods: {
      viewUser() {
        axios
      .get('https://api.omnihealth.com.do/api/users')
      .then(res => {
        var dataUser = res.data.length
        console.log(dataUser)
        localStorage.setItem('numberUser',dataUser)
      })
      }
    }
  }
</script>