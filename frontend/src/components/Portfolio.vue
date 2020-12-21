<template>
  <div>
    <p>TODO: PORTFOLIO</p>
  <p @click="goHome">Back to home</p>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  methods: {
    goHome: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>