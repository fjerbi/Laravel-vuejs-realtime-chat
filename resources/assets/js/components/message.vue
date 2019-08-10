<template>

    <li class="list-group-item"><slot></slot></li>

</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
