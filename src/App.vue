<template>
  <div id="app">
    <md-layout md-align='center' >
    <md-layout md-gutter='16' md-flex='50'>
      <user v-if='loggedIn'></user>
      <login v-else></login>
    </md-layout>
    </md-layout>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      routes: [
        {title: 'Speckle Admin',
          path: '/'},
        {title: 'Register',
          path: 'register'},
        {title: 'Login',
          path: 'login'},
        {title: 'Account',
          path: 'account'},
      ]
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.loggedIn
    },
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style>
#app {
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
