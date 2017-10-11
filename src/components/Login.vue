<template>
  <md-layout md-flex='100'>
    <md-tabs>
      <md-tab id='login' md-label='Login'>
        <form name='Login' @submit.stop.prevent="submit"> 
          <md-input-container>
            <md-input required v-model="formData.email" placeholder='Email Address'></md-input>
          </md-input-container>
          <md-input-container>
            <md-input required type='password' v-model="formData.password" placeholder='Password'></md-input>
          </md-input-container>
          <md-button class='md-raised md-primary' type='submit'>Submit</md-button>
        </form>
      </md-tab>
      <md-tab id='register' md-label='Register'>
        <register></register>
      </md-tab>
    </md-tabs>
  </md-layout> 
</template>

<script>
import qs from 'qs'
export default {
  name: 'login',
  data () {
    return {
      formData: {
        email: '',
        password: '',
      }
    }
  },
  methods:{
    submit: function () {
      this.$http.post('/accounts/login',qs.stringify(this.formData)
      )
        .then(response => {
          var token = response.data.token
          this.$store.commit( 'SET_JWT', token)
          this.$store.commit( 'SET_LOGGED_IN', true)
        })
    }
  },
  computed: {
    isLogedIn () {
      return this.$store.state.jwtToken
    }
  }
}
</script>

<style scoped>
</style>
