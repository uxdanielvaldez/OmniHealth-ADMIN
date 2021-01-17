<template>
    <div>
        <navbar />
        <br>
        <box />
        <br>
            <div class="container d1" style="width:50%; padding-top:15px; padding-left:30px; background-color:#fff; margin-top:5px; border-radius:5px;">
                <ChartUser></ChartUser>
            </div>
            <div class="container d2" style="width:48%; padding-top:15px; padding-left:30px; background-color:#fff; margin-top:5px; border-radius:5px;">
                <ChartUserState></ChartUserState>
            </div>
            <br>
            <div class="container d1" style="width:50%; padding-top:15px; padding-left:30px; background-color:#fff; margin-top:5px; margin-bottom:30px; border-radius:5px;">
                <ChartApi></ChartApi>
            </div>
            <!-- <div class="container d2" style="width:48%; padding-top:15px; padding-left:30px; background-color:#fff; margin-top:5px; border-radius:5px;">
                <ChartAPIPORTAL></ChartAPIPORTAL>
            </div> -->

    </div>
</template>

<script>
import navbar from '../components/navbar'
import box from  '../components/box_dashboard'
import ChartUser from '../components/charUser'
import ChartUserState from '../components/chartUserState.vue';
import ChartApi from '../components/chartApi'
import ChartAPIPORTAL from '../components/chartApiConsulta.vue'
export default {
    components: {
        navbar,
        box,
        ChartUser,
        ChartUserState,
        ChartApi,
        ChartAPIPORTAL
    }
}
</script>

<style>
    .d1 {
       float:left;

  }

  .d2 {
       overflow: hidden; 
       float: right;
  }
</style>