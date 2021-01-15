<template>
    <div>
        <div class="container box">
            <h5>Usuarios</h5>
            <h4>Bienvenido a OmniHealth</h4>
            <input type="text" style="float:right; margin-top:-40px; border:none; border-radius:100px; background-color:rgb(216, 215, 215); padding-top:10px; padding-left:10px; padding-bottom:5px;" placeholder="Buscar ...">
        </div>
    </div>
</template>

<script>
import router from '../router/index'
export default {

}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

    body {
        background-color: rgb(228, 226, 226);
        color: rgb(216, 215, 215);
    }

    .box {
        width: 98%;
        background-color: #ffffff;
        font-family: 'Roboto', sans-serif;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 30px;
        border-radius: 5px;
    }

    .box > h5 {
        font-weight: 500;
        font-size: 14px;
        color: #5F89FA;
    }

    .box > h4 {
        font-weight: 100;
        font-size: 14px;
    }

    .box > button {
        float:right;
        margin-top: -40px;
    }

    @media screen and (max-width: 1000px) {
    .box > button {
        float:left;
        margin-top: 0px;
    }  

    }
</style>