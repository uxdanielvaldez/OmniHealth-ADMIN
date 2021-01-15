<template>
    <div>
        <navbar />
        <br>
        <box />
        <br>
        <crear />
    </div>
</template>

<script>
import navbar from '../components/navbar'
import box from '../components/boxcrearapi'
import crear from '../components/crearapi'
export default {
    components: {
        navbar,
        box,
        crear
    }
}
</script>