import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
console.log(axios.defaults)

const tokenStore = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'SET_JWT') {
      axios.defaults.headers.common['Authorization'] = mutation.payload
    }
  })
}

export default new Vuex.Store( {
  state: {
    user: {},
    jwtToken: '',
    loggedIn: false
  },
  getters: {
    user: state => state.user,
    jwtToken: state => state.jwtToken,
    loggedIn: state => state.loggedIn
  },
  mutations: {
    SET_JWT (state, jwtToken) {
      state.jwtToken = jwtToken
    },
    SET_USER(state, account) {
      state.user = account
    },
    SET_LOGGED_IN(state, boolean) {
      state.loggedIn = boolean
    }
  },
  plugins: [tokenStore]
})
