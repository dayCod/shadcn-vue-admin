import axios from 'axios'
import { defineStore } from 'pinia'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export let useAuthStore = defineStore('auth', {
  state() {
    return {
      user: [],
      access_token: '',
      processing: false,
    }
  },

  actions: {
    async login(credential) {
      this.processing = true

      try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, credential)

        localStorage.setItem('auth', JSON.stringify(response.data.data))

        this.$state.user = response.data.data.user
        this.$state.access_token = response.data.data.access_token
      } catch (error) {
        console.error('Login error:', error)
        throw error
      } finally {
        this.processing = false
      }
    },

    getUser() {
      if (!this.$state.user || this.$state.user.length === 0) {
        const authData = localStorage.getItem('auth')
        if (authData) {
          const parsedData = JSON.parse(authData)
          this.$state.user = parsedData.user
          this.$state.access_token = parsedData.access_token
        }
      }
      return this.$state.user
    },

    logout() {
      localStorage.removeItem('auth')
      this.$state.user = []
      this.$state.access_token = ''
    },
  },
})
