<template>
    <div class="card shadow border-0 my-4">
        <img class="card-img-top" :src="card.display_url" alt="Card image cap">
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            card: Object,
        },
    }
</script>

<style scoped>
    .card {
        border-radius: 0;
    }
    .card-img-top {
        border-radius: 0;
    }
</style>
