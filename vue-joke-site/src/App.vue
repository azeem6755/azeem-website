<template>
  <v-app>
    
    <v-main>
      <home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',

  components: {
    'home': Home
  },

  data: () => ({
    //
  }),
};
</script>
