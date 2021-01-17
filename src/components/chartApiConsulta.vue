<script>
  //Importing Bar class from the vue-chartjs wrapper
  import { Pie } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  var api = 20
  var portal = 50
  export default {
    extends:Pie,
    data () {
      return {
        datacollection: {
          //Data to be represented on x-axis
          labels: ['API', 'PORTAL'],
          datasets: [
            {
              label: 'DATOS',
              backgroundColor: ['#2f7dad','#2f7da'],
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#2f7dad',
              data: [api, portal]
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
    }
  }
</script>