<template>
  <div>
    <p>TODO: PROFILE</p>
  <p @click="goHome">Back to home</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  methods: {
    goHome: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>