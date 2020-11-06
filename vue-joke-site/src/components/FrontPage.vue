<template>
    <div class="title">
        {{title}}
    </div>
</template>

<script>
export default {
    name: 'FrontPage',
    props: {
        title: String
    }
}
</script>

<style scoped>
    .title{
        font-size: 18px;
        color: green;
    }
</style>