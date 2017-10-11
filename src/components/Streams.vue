<template>
  <div class='streams'>
    {{streams}}
  </div>
</template>

<script>
export default {
  name: 'streams',
  data: function () {
    return {
    streams : ''
    }
  },
  beforeMount() {
    this.$http.get('/accounts/streams')
    .then(response => {
      console.log(response.data)
      this.streams = response.data.streams
    })
  },
  computed: {
  }
}
</script>

<style scoped>
.register-card{
  width:400px;
}
</style>
