<template>
  <div>
    <p>TODO: ABOUT ME</p>
  <p @click="goHome">Back to home</p>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    goHome: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>