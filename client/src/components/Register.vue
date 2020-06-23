<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>
        <input type="email" name='email' placeholder="email" v-model="email">
      </div>
      <div>
        <input type="password" name='password' placeholder="password" v-model="password">
      </div>
      <input type="submit" value='submit'>
      <!-- <button type='button' @click="handleSubmit">Submit</button> -->
    </form>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
