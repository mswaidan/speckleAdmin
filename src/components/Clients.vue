<template>
  <div class='Clients'>
    {{clients}}
  </div>
</template>

<script>
export default {
  name: 'clients',
  data: function () {
    return {
    clients : ''
    }
  },
  beforeMount() {
    this.$http.get('/accounts/clients')
    .then(response => {
      console.log(response.data)
      this.clients = response.data.clients
    })
  },
  computed: {
  }
}
</script>

<style scoped>
</style>
