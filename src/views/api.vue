<template>
    <div>
        <navbar />
        <br>
        <box />
        <br>
        <tableapi />
    </div>
</template>

<script>
import navbar from '../components/navbar'
import box from '../components/box_api'
import tableapi from '../components/table_api'
export default {
    components: {
        navbar,
        box,
        tableapi
    }
}
</script>