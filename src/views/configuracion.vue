<template>
    <div>
        <navbar />
        <br>
        <configuracion />
    </div>
</template>

<script>
import navbar from '../components/navbar'
import configuracion from '../components/infogeneral.vue'
export default {
    components: {
        navbar,
        configuracion
    }
}
</script>