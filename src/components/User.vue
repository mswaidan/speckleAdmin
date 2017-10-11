<template>
  <div class='account'>
    <md-tabs>
      <md-tab id='account' md-label='Account'>
        <md-list>
          <md-list-item>
            Email: {{ user.email }}
          </md-list-item>
          <md-list-item>
            Name: {{ user.name }} {{user.surname}}
          </md-list-item>
        </md-list>
      </md-tab>
      <md-tab id='streams' md-label='Streams'>
        <streams></streams>
      </md-tab>
      <md-tab id='clients' md-label='Clients'>
        <clients></clients>
      </md-tab>
      <md-tab id=logout md-button v-on:click='logOut' md-label='Logout'>
        <md-button v-on:click='logOut'>Logout</md-button>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: 'account',
  beforeMount() {
    this.$http.get('/accounts/profile')
      .then(response => {
        console.log(response.data)
        var data = response.data.user
        this.$store.commit( 'SET_USER', data )
      })
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    logOut: function (event) {
      this.$store.commit( 'SET_LOGGED_IN', false)
    }
  }
}
</script>

<style scoped>
</style>
