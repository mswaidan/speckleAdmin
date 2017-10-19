<template>
  <div class='streams'>
    <ul>
      <li v-for="stream in streams">{{stream.streamId}}</li>
    </ul>
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
