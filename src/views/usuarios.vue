<template>
    <div>
        <navbar />
        <br>
        <box />
        <br>
        <tableuser />
    </div>
</template>

<script>
import navbar from '../components/navbar'
import box from '../components/box_usuarios'
import tableuser from '../components/table_user'
export default {
    components: {
        navbar,
        box,
        tableuser
    }
}
</script>