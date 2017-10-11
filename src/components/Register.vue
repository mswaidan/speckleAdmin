<template>
  <div>
    <form name='Register' @submit.stop.prevent="submit"> 
      <md-input-container>
        <md-input required v-model="formData.email" placeholder='Email Address'></md-input>
      </md-input-container>
      <md-input-container>
        <md-input required type='password' v-model="formData.password" placeholder='Password'></md-input>
      </md-input-container>
      <md-input-container>
        <md-input v-model="formData.name" placeholder='First Name'></md-input>
      </md-input-container>
      <md-input-container>
        <md-input v-model="formData.surname" placeholder='Last Name'></md-input>
      </md-input-container>
      <md-input-container>
        <md-input v-model="formData.company" placeholder='Company'></md-input>
      </md-input-container>
      <md-button class='md-raised md-primary' type='submit'>Submit</md-button>
    </form>
  </div>
</template>

<script>
import qs from 'qs'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'register',
  data () {
    return {
      formData: {
        email: '',
        password: '',
        name: '',
        surname: '',
        company: ''
      }
    }
  },
  methods:{
    submit: function () {
      this.$http.post('/accounts/register',qs.stringify(this.formData)
      )
        .then(response => {
          console.log(response.data)
          var token = response.data.apitoken
          console.log(token)
          this.$store.commit( 'SET_JWT', token)
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
