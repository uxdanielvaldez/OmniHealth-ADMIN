<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { Bar } from 'vue-chartjs'
  import axios from 'axios'
  //Exporting this so it can be used in other components
  var api = localStorage.getItem("dataAPI")
  export default {
    extends:Bar,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: [
          '2021',
          '2022',
          '2023',
          '2024',
          '2025',
          '2026',
          '2027',
          '2028',
          '2029',
          '2030'],
          datasets: [
            {
              label: 'API',
              backgroundColor: ['#2f7dad','#2f7da', '#2f7dad'],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#2f7dad',
              data: [api]
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
      this.viewData()
    },
    methods: {
      viewData() {
        axios
      .get('https://api.omnihealth.com.do/api/log_meeting')
      .then(res => {
        var dataAPI = res.data.length
        console.log(dataAPI)
        localStorage.setItem("dataAPI", dataAPI)
      })
      }
    }
  }
</script>